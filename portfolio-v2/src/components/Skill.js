import React, { useState } from "react";

//graph
import { ResponsivePie } from "@nivo/pie";

//data
import { graphData, skillInfo } from "../data/graphdata.js";

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
      <div>
        <h5 className="section-heading">Skills</h5>
        <div
          style={{
            height: "400px",
            border: "solid 1px black",
            margin: "5%",
          }}
        >
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
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                symbolSize: 18,
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
        <div>
          {dataOnClick ? (
            <div>
              <p>{test[0].id}</p>
              <button onClick={() => setDataOnClick()}>clcik</button>
            </div>
          ) : (
            <p>hello</p>
          )}
        </div>
      </div>
    </section>
  );
}
