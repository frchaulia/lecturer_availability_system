import React from "react";
import Background from "../atoms/0.main/1.background";
import Container from "../atoms/0.main/1.container";
import ContentWrapper from "../atoms/0.main/1.content_wrapper";
import Header_Dashboard from "../atoms/0.main/2.header_dashboard";
import Navbar from "../atoms/0.main/1.lecturer_navbar_dashboard";
import CardGrid from "../atoms/0.main/LecturerCard";
import Body from "../atoms/0.main/1.body";
import SearchBar from "../atoms/3.fahmi/search_bar";

export default function Lecturer_Dashboard() {
  return (
    <Container>
        <Background>
            <ContentWrapper>

                <Header_Dashboard>
                  <Navbar/>
                </Header_Dashboard>

                  
            </ContentWrapper>
            <Body>
              <div className="w-full">
              <div className="flex justify-center items-center">
                <SearchBar setSearchQuery={function (query: string): void {
                throw new Error("Function not implemented.");
              } }></SearchBar>
              </div>
              <div>
                <CardGrid lecturer={null}></CardGrid>
              </div>
              </div>
            </Body>
        </Background>
    </Container>
  );
}




{/* <div className="flex flex-col text-xs font-semibold text-black">
      <div className="flex gap-5 px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 py-3.5 rounded-md shadow-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5187f3eb0a99c9a6da49f6b57c482ed52b8fd42978230fd708a85ac0ab506e08?"
            className="self-end aspect-[1.1] fill-orange-600 w-[34px] max-md:mr-2.5"
            alt="Profile"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="self-center mt-2.5 max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Budianto Wijaya
            <br />
            Lecturer Room : 2 <br />
            Availability Status : Teaching
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center px-3.5 py-4 mt-7 bg-white">
            Name : Ahmad Rivaldi
            <br />
            Lecturer Room : 1<br />
            Availability Status : Thesis guidance
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Soeswahyuni
            <br />
            Lecturer Room : 6<br />
            Availability Status : Not Available
          </div>
        </div>
      </div>
      <div className="flex gap-5 px-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Soeswahyuni
            <br />
            Lecturer Room : 6<br />
            Availability Status : Not Available
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center px-3.5 py-4 mt-7 bg-white">
            Name : Ahmad Rivaldi
            <br />
            Lecturer Room : 1<br />
            Availability Status : Thesis guidance
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-14 pb-4 rounded-md shadow-lg">
          <img
            loading="lazy"
            srcSet="..."
            className="self-center max-w-full aspect-[0.96] w-[180px]"
            alt="Profile"
          />
          <div className="justify-center items-start px-5 py-4 mt-7 bg-white max-md:pr-5">
            Name : Anindya Reizana <br />
            Lecturer Room : 4<br />
            Availability Status : Available
          </div>
        </div>
      </div>
    </div> */}