var ComfyWeb = require("webwebweb");
ComfyWeb.APIs[ "/" ] = ( qs ) => {
  return { "test": "example!" };
};
ComfyWeb.Run( 8100 );
