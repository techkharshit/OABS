import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import HallCard from "./HallCard";

export default function DashboardBody() {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box pl="10" pr="10">
        <Grid templateColumns="repeat(3, 2fr)" gap={6}>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg"
              // imgsrc="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              block="OFFICE"
              hall="OFFICIAL BIG SEMINAR AUDITORIUM"
              capacity="500"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80"
              block="OFFICE"
              hall="OFFICIAL SEMINAR AUDITORIUM 2"
              capacity="300"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU"
              block="TECHNOLOGY"
              hall="HIGHTECH SEMINAR AUDITORIUM"
              capacity="400"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              block="ART"
              hall="ARTISTIC SEMINAR AUDITORIUM - 1"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg"
              block="ART"
              hall="ARTISTIC SEMINAR AUDITORIUM - 2"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg"
              block="MEETING"
              hall="BOARD MEETING AUDITORIUM"
              capacity="100"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://archi-monarch.com/wp-content/uploads/2022/08/AUDITORIUM.webp"
              block="CULTURE"
              hall="CULTURAL FEST AUDITORIUM"
              capacity="3000"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://5.imimg.com/data5/OI/SY/YY/SELLER-3947012/complete-interior-technical-services-for-auditoriums-1000x1000.jpg"
              block="CULTURE"
              hall="CULTURAL FEST AUDITORIUM-2"
              capacity="6000"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://5.imimg.com/data5/SELLER/Default/2023/2/TW/SJ/TE/30736520/auditorium-sound-proofing-service.jpg"
              block="FAMILY"
              hall="FAMILY GET TOGETHER AUDITORIUM"
              capacity="15000"
            ></HallCard>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
