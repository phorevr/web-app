onmessage = async (e) => {
  const root = await navigator.storage.getDirectory();
  const fileHandle = await root.getFileHandle('app.txt', { create: true });
  const accessHandle = await fileHandle.createSyncAccessHandle();

  if (e.data.action === 'read') {
    const fileSize = accessHandle.getSize();
    const buffer = new DataView(new ArrayBuffer(fileSize));
    accessHandle.read(buffer, { at: 0 });
    const decoder = new TextDecoder('utf-8');

    postMessage(decoder.decode(buffer));
  }

  if (e.data.action === 'write') {
    accessHandle.truncate(0);

    const encoder = new TextEncoder();
    const encodedMessage = encoder.encode(e.data.data);
    accessHandle.write(encodedMessage, { at: 0 });

    accessHandle.flush();
  }

  accessHandle.close();
};