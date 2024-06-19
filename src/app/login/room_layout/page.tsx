import * as React from "react";
import Container from "@/app/components/atoms/0.main/1.container";
import Background from "@/app/components/atoms/0.main/1.background";
import ContentWrapper from "@/app/components/atoms/0.main/1.content_wrapper";
import Login_Header from "@/app/components/atoms/0.main/2.login_header";
import Login_TextNavbar from "@/app/components/atoms/0.main/2.login_textnavbar";
import Body from "@/app/components/atoms/0.main/1.body";
import initSpace from "@/app/components/atoms/2.evan/smplrspace";

export default function Home() {
  return (
    <Container>
        <Background>
            <ContentWrapper>
                <Login_Header>
                  <Login_TextNavbar/>
                </Login_Header>
            </ContentWrapper>
            <Body>
            <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello world | Smplrspace</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="styles.css" />

    <script src="https://app.smplrspace.com/lib/smplr.js"></script>
    <link href="https://app.smplrspace.com/lib/smplr.css" rel="stylesheet" />
  </head>

  <body style="padding: 0 1rem">
    <h1>Hello world - load from CDN</h1>
    <p>
      This example demonstrates a basic integration of Smplrspace, loading
      smplr.js from our CDN in a static website.
    </p>
    <p>
      <a href="https://docs.smplrspace.com" target="_blank">
        Learn more in the docs
      </a>
    </p>
    <div class="smplr-wrapper">
      <div id="test" class="smplr-embed"></div>
    </div>

    <script type="module" src="script.js"></script>
  </body>
</html>

            </Body>
        </Background>
    </Container>
  );
}

// <iframe
//   title="Space name - Smplrspace"
//   src="https://smplr.me/xxxxxxx"
//   style="border: 0px none; width: 100%; height: 100%;"
//   scrolling="no"
//   allowfullscreen=""
//   webkitallowfullscreen=""
//   mozallowfullscreen=""
// ></iframe>

// <script src="https://app.smplrspace.com/lib/smplr.js"></script>
// <link href="https://app.smplrspace.com/lib/smplr.css" rel="stylesheet" />

// import { loadSmplrJs } from "@smplrspace/smplr-loader";

// loadSmplrJs()
//   .then((smplr) => {
//     /* enjoy a fully typed API and auto-completion */
//     const space = new smplr.Space({
//       spaceId: "...",
//       clientToken: "pub_...",
//       containerId: "...",
//     });
//     space.startViewer({
//       preview: true,
//       onReady: () => console.log("Viewer is ready"),
//       onError: (error) => console.error("Could not start viewer", error),
//     });
//   })
//   .catch((error) => console.error(error));