import React, { useState } from "react";

//graph
import { ResponsivePie } from "@nivo/pie";

//data
import { graphData, skillInfo } from "../data/graphdata.js";

import { Animated } from "react-animated-css";

export default function Skill() {
  const [dataOnClick, setDataOnClick] = useState();

  let test;

  if (dataOnClick) {
    test = skillInfo.filter((data) => {
      return dataOnClick.id === data.id;
    });
  }
  console.log(test);

  return (
    <section id="skills">
      <div className="skill-section-container">
        <h5 className="section-heading">Skills</h5>
        <div className="graph-container">
          <ResponsivePie
            onClick={(slice) => {
              setDataOnClick(slice);
            }}
            data={graphData}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            startAngle={-8}
            sortByValue={true}
            innerRadius={0.5}
            padAngle={1}
            cornerRadius={15}
            colors={{ scheme: "nivo" }}
            borderColor={{ from: "color", modifiers: [["darker", "0.2"]] }}
            enableRadialLabels={false}
            radialLabelsSkipAngle={7}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={-4}
            radialLabelsLinkDiagonalLength={22}
            radialLabelsLinkHorizontalLength={26}
            radialLabelsLinkStrokeWidth={3}
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabel={function (e) {
              return e.id + " (" + e.value + "%)";
            }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 50,
                itemHeight: 5,
                itemTextColor: "#999",
                symbolSize: 10,
                symbolShape: "circle",

                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "black",
                    },
                  },
                ],
              },
            ]}
          />
        </div>

        {dataOnClick ? (
          <div className="slice-container">
            <h6>{test[0].id}</h6>
            <p>{test[0].desc}</p>
            <p className="graph-btn" onClick={() => setDataOnClick()}>
              Return
            </p>
          </div>
        ) : (
          <div className="slice-container">
            <h6>Graph</h6>
            <p>
              Hello ahsoif s ;ajf [as ajskd f ahspofhuaw asjf lakws aoshdfp akaj
              sdpoifa aijspoid fp iajspdfoi oaisjdpf oaisjd fpi poidjc oa sa[
              oaisj [oj aoijsd
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
