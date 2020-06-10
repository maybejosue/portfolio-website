import React, { useState } from "react";

//graph
import { ResponsivePie } from "@nivo/pie";

//data
import { graphData, skillInfo } from "../data/graphdata.js";

import Check from "../utils/Check.js";

export default function Skill() {
  const [dataOnClick, setDataOnClick] = useState();
  let slice;

  if (dataOnClick) {
    slice = skillInfo.filter((data) => {
      return dataOnClick.id === data.id;
    });
  }

  return (
    <section id="skills">
      <div className="skill-section-container">
        <h5 className="section-heading">Skills</h5>
        <div className="skill-content-container">
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
              radialLabelsTextColor="black"
              radialLabelsLinkOffset={-4}
              radialLabelsLinkDiagonalLength={22}
              radialLabelsLinkHorizontalLength={26}
              radialLabelsLinkStrokeWidth={3}
              radialLabelsLinkColor={{ from: "color" }}
              sliceLabel={function (e) {
                return e.id + " (" + e.value + "%)";
              }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="black"
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
                  itemTextColor: "red",
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
              <h6>{slice[0].id}</h6>
              <div className="sc-skill-container">
                {slice[0].desc.map((skill) => (
                  <div className="sc-check-and-text-container">
                    <div className="sc-check-container">
                      <Check />
                    </div>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="slice-container starter-graph-text">
              <h6>Click any slice on the Graph!</h6>
              <p>
                Graph based on what I'm most comfortable with in terms of tools,
                frontend, backend, computer science.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
