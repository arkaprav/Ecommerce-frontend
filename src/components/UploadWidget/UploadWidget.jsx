/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

const UploadWidget = ({ image, setImage }) => {
  const handleSuccess = (result) => {
    const selectedFile = result.event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      setImage(base64String);
      console.log("Base64 string:", base64String);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <WidgetLoader />
      <Widget
        sources={["local", "camera", "dropbox"]}
        sourceKeys={{
          dropboxAppKey: "1dsf42dl1i2",
          instagramClientId: "d7aadf962m",
        }}
        resourceType={"image"}
        // cloudName={""}
        // uploadPreset={""}
        buttonText={"Upload"}
        style={{
          color: "white",
          border: "none",
          width: "120px",
          backgroundColor: "green",
          borderRadius: "4px",
          height: "25px",
        }}
        folder={"my_folder"}
        cropping={false}
        multiple={true}
        autoClose={false}
        onSuccess={handleSuccess}
        onFailure={(error) => {
          console.log(error);
        }}
        logging={false}
        customPublicId={"sample"}
        eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"}
        use_filename={false}
        widgetStyles={{
          palette: {
            window: "#737373",
            windowBorder: "#FFFFFF",
            tabIcon: "#FF9600",
            menuIcons: "#D7D7D8",
            textDark: "#DEDEDE",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#B3B3B3",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#909090",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        }}
        destroy={true}
        generateSignatureUrl={null}
        // apiKey={null}
        // accepts={""}
        // contentType={"application/json"}
        withCredentials={true}
        unique_filename={true}
      />
    </>
  );
};

export default UploadWidget;
