import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { time } from 'console';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  // let name = "weather"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", fontFamily: "font", fontSize: 20, color: "white" }}>
      <br-x />
      <Window style={{ minHeight: 500 , margin: 10 , width: "calc(100% - 20px)", backgroundImage: 'url("https://irmapserver.ir/research/16/A.webp', backgroundRepeat: "no-repeat" }}>
        <c-x>
          <br-x />
          <br-x />
          <f-20 style={{ padding: "0 20px" , fontSize: 80 , color: "#95C7E6" }}> Shiraz </f-20>
          <br-x />
          <f-20 style={{ padding: "0 30px" , fontSize: 15 , color: "white" }}> {props.date}</f-20>
          <br-x />
          <f-20 style={{ padding: "0 30px" , fontSize: 15 , color: "white" }}> {props.time}</f-20>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-cse>
            <f-cc style={{ height: 100 , width: 350 , backgroundColor: ("#00000068"), borderRadius: 80 , fontSize: 30 }}>
              <img src="https://irmapserver.ir/research/16/T.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <span>Feels like: {props.feelslikec}°c </span>
            </f-cc>
            {/* <br-x /> */}
            <f-cc style={{ height: 100 , width: 350 , backgroundColor: "#00000068", borderRadius: 80 , fontSize: 30 }}>
              <img src="https://irmapserver.ir/research/16/H.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <span>Humidity: {props.humidity} %RH </span>
            </f-cc>
          </f-cse>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-cc>
          <div style={{ direction: "rtl", minHeight: "11vh", fontFamily: "font" }}>
            <f-c style={{ padding: "0 20px", fontSize: 40 , width: "100%",color:"#52727F94"}}> TURING </f-c>
          </div>
          </f-cc>
          <br-x />
        </c-x>



      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure

  let date = new Date().toLocaleDateString()
  let time = new Date().toLocaleTimeString()


  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        pressure,
        date,
        time
      })
    },
  }
}





// https://irmapserver.ir/research/43/W.webp