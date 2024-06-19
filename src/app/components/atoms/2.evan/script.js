const space = new smplr.Space({
    spaceId: 'edb2ebaa-47ea-4e54-af0d-cf543328bdb0',
    clientToken: 'pub_eb760fee77634cdab2fe31146fc371c2',
    containerId: 'test',
  });
  space.startViewer({
    preview: true,
    allowModeChange: true,
    onReady: () => console.log('Viewer is ready'),
    onError: (error) => console.error('Could not start viewer', error),
  });