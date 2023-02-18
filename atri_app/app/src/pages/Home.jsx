import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useDiv1Cb, useDiv3Cb, useDiv12Cb, useDiv7Cb, useDiv13Cb, useDiv14Cb, useDiv15Cb, useDiv2Cb, useImage15Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useButton3Cb, useButton4Cb, useTextBox15Cb, useImage12Cb, useImage13Cb, useImage14Cb, useButton8Cb, useButton9Cb, useImage16Cb, useImage17Cb, useImage18Cb, useImage19Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useButton10Cb, useButton11Cb, useButton12Cb, useButton13Cb, useTextBox42Cb, useTextBox43Cb, useButton14Cb, useButton15Cb, useButton16Cb, useButton17Cb, useButton19Cb, useButton20Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox12Cb, useImage11Cb, useImage20Cb, useImage21Cb, useImage23Cb, useImage24Cb, useTextBox31Cb, useTextBox32Cb, useTextBox33Cb, useTextBox36Cb, useTextBox37Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox44Cb, useDiv8Cb, useDiv9Cb, useDiv10Cb, useDiv11Cb, useImage25Cb, useTextBox46Cb, useTextBox48Cb, useTextBox49Cb, useImage26Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useImage27Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useImage28Cb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useImage29Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useImage30Cb, useTextBox63Cb, useTextBox64Cb, useTextBox65Cb, useImage32Cb, useTextBox66Cb, useTextBox67Cb, useTextBox68Cb, useImage33Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useImage35Cb, useTextBox73Cb, useTextBox75Cb, useTextBox76Cb, useDiv17Cb, useImage36Cb, useImage37Cb, useImage38Cb, useImage39Cb, useImage40Cb, useImage41Cb, useImage42Cb, useTextBox77Cb, useTextBox78Cb, useImage43Cb, useTextBox79Cb, useTextBox80Cb, useImage2Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()

  return (<>
  <Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Div>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}/>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}/>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}/>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}/>
</Div>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Div>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Div>
  </>);
}
