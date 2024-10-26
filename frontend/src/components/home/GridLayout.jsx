import React from "react";

const GridLayout = () => {
  return (
    <>
      <div className="col-lg-10 col-11 mx-auto">
        <div className="row ">
          <div className="col-sm-3">
            <div className="row img-row">
              <div className="col-sm-12 my-col rounded-3 col-6 d-flex flex-column justify-content-between">
                <div className="col-sm-12 my-col rounded-3">
                  {" "}
                  <img
                    className="rounded-2 my-2"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-ea61/k2-_bccd02f9-6a65-4184-aaeb-20b292b2b479.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
                    width={"100%"}
                    alt="Product"
                  />
                </div>
                <div className="col-sm-12 my-col rounded-3">
                  <img
                    className="rounded-2 my-2"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-2682/k2-_8795c01c-a4c3-46bc-8857-45e0e748ace5.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
                    width={"100%"}
                    alt="Product"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-6 my-col rounded-3">
                <img
                  className="rounded-2 my-2 "
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-bd52/k2-_5098f0e2-237c-4cff-a8cd-7658a3365eb4.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70"
                  width={"100%"}
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              className="rounded-2 my-2"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-63d0/k2-_842ad15a-8ca3-4b89-8aad-d7bf8a8d7ae2.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
              width={"100%"}
              alt="Product"
            />
            <div className="row ">
              <div className="col-sm-6">
                <img
                  className="rounded-2 my-2"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-f47e/k2-_22af3a90-8bc5-4e2e-8ab4-7db2c822806b.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70"
                  width={"100%"}
                  alt="Product"
                />
              </div>
              <div className="col-sm-6 rounded-2">
                <img
                  className="rounded-2 my-2"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-4405/k2-_80e88db9-b509-412e-8711-df8a48cf8365.v1.png?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70"
                  width={"100%"}
                  alt="Product"
                />
              </div>
              <div className="rounded-2 col-12">
                <img
                  className="rounded-2 my-2"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-6ee9/k2-_7d5a15ef-d08e-467c-9903-5084cf38e808.v1.png"
                  width={"100%"}
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row img-row">
              <div className="col-sm-12 col-6 my-col rounded-3">
                <img
                  className="rounded-2 my-2 "
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-2f8e/k2-_08c0e663-90c0-41b5-b767-fe06f78db8ca.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70"
                  width={"100%"}
                  alt="Product"
                />
              </div>
              <div className="col-sm-12 my-col rounded-3 col-6 d-flex flex-column justify-content-between">
                <div className="col-sm-12 my-col rounded-3">
                  {" "}
                  <img
                    className="rounded-2 my-2"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-b27f/k2-_fdc773d6-02c3-492c-8a87-7afc1e90e9f1.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
                    width={"100%"}
                    alt="Product"
                  />
                </div>
                <div className="col-sm-12 my-col rounded-3">
                  <img
                    className="rounded-2 my-2"
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-2d74/k2-_604c3999-a1df-4d3b-a7dc-d68b5a529718.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
                    width={"100%"}
                    alt="Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
