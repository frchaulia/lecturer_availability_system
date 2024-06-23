import * as React from "react";
import Container from "../../components/atoms/0.main/1.container";
import Background from "../../components/atoms/0.main/1.background";
import ContentWrapper from "../../components/atoms/0.main/1.content_wrapper";
import Login_Header from "../../components/atoms/0.main/2.login_header";
import Login_TextNavbar from "../../components/atoms/0.main/2.login_textnavbar";
import Body from "../../components/atoms/0.main/1.body";
import Map3D from "../../components/atoms/2.evan/map3D";

export default function Home() {
  return (
    <Container>
        {/* <Background> */}
            <ContentWrapper>
                <Login_Header>
                  <Login_TextNavbar/>
                </Login_Header>
            </ContentWrapper>
            <Body>
              <Map3D></Map3D>
            </Body>
        {/* </Background> */}
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