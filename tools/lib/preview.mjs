import { spawn } from 'node:child_process';

// Serves dist/ with `astro preview` on a port of its own and hands back a stop function.
// Without SITE_URL the tools never reuse a server somebody else started: a stale preview would serve an old build.
// With SITE_URL set it uses that running server instead and starts and stops nothing.
export async function startPreview(port) {
  const external = process.env.SITE_URL?.replace(/\/+$/, '');
  if (external) return { base: external, stop: async () => {} };
  const child = spawn(process.execPath, ['node_modules/astro/bin/astro.mjs', 'preview', '--port', String(port)], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let log = '';
  child.stdout.on('data', d => (log += d));
  child.stderr.on('data', d => (log += d));
  child.on('exit', (code, signal) => {
    if (!stopping) console.error(`astro preview ended on its own (code ${code}, signal ${signal}):
${log.slice(-600)}`);
  });
  let stopping = false;
  const base = `http://localhost:${port}`;
  const stop = () => new Promise(resolve => {
    stopping = true;
    if (child.exitCode !== null) return resolve();
    child.once('exit', resolve);
    child.kill();
  });
  for (let i = 0; i < 300; i++) {
    if (child.exitCode !== null) throw new Error(`astro preview exited early:\n${log}`);
    try {
      const res = await fetch(base + '/');
      if (res.ok) return { base, stop };
    } catch { /* not listening yet */ }
    await new Promise(r => setTimeout(r, 200));
  }
  await stop();
  throw new Error(`astro preview did not start:\n${log}`);
}
