import Button from "../button/Button";
import "./Communiti.scss";
import programImg from "../../assets/image/2.jpg";
import codingImg from "../../assets/image/3.jpg";
const Communiti = ({ mode }) => {
  return (
    <>
      <div className="communiti">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top_com">
                <img src="https://learnwithsumit.com/_next/static/media/peep2.ee5f8180.svg" />
                <h3>
                  কমিউনিটি <span> কন্ট্রিবিউশন</span>{" "}
                </h3>
                <p>কমিউনিটির জন্য আমাদের কিছু উল্লেখযোগ্য কাজ</p>
              </div>
              <div
                className="card"
                style={{ backgroundColor: "var(--card-body-bg)" }}
              >
                <div className="card-body communiti-card">
                  <div className="left-card">
                    <div className="logo">
                      {mode ? (
                        <img
                          src="https://learnwithsumit.com/_next/static/media/brandlogo.e670b01d.svg"
                          alt=""
                          style={{ width: "300px" }}
                        />
                      ) : (
                        <img
                          src="https://learnwithsumit.com/_next/static/media/devConfWhite.344fe3d2.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <p>
                      আমরা ২০২৩ সালের 21মে - 27মে আয়োজন করেছিলাম সর্বজনস্বীকৃত
                      এবং প্রশংসিত ডেভেলোপার কনফারেন্স devConf 1.0. সেখানে চারশ
                      জন শিক্ষার্থী সহ উপস্থিত ছিলেন কমিউনিটির প্রায় দেড়শ
                      জনপ্রিয় এবং শ্রদ্ধেয় অতিথিবৃন্দ। সেই সাথে পুরো ইভেন্ট জুড়ে
                      বাংলাদেশের প্রায় ৭০ হাজারেরও বেশি ডেভেলপার ভাইরা অনলাইনে
                      কানেক্টেড হয়েছিলেন।
                    </p>
                    <Button> ওয়েবসাইট ভিজিট করুন </Button>
                  </div>
                  <div className="right-card">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/ER_y4tIbTNM?si=V9pPqzxSz149qx2R"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="communiti-card-group">
                <div className="card">
                  <div className="card-body">
                    <img src={programImg} alt="" />

                    <h5>আমাদের আয়োজিত প্রোগ্রামসমুহ</h5>
                    <p>
                      প্রোগ্রামিং এর বিভিন্ন সেক্টর সম্পর্কে অভিজ্ঞ সিনিয়র
                      প্রোগ্রামার দের মতামত লার্নার দের কাছে পৌঁছে দেবার
                      পাশাপাশি একটি সুন্দর ক্যারিয়ার গাইডলাইন দেবার জন্য আমরা
                      আয়োজন করেছিলাম বিভিন্ন টেক টক শো।
                    </p>
                    <Button>ভিজিট করুন</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="communiti-card-group">
                <div className="card">
                  <div className="card-body">
                    <img
                      src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftech-adda.de427cf6.jpg&w=640&q=75"
                      alt=""
                    />

                    <h5>গ্র্যান্ড টেক আড্ডা</h5>
                    <p>
                      কমিউনিটির সুষ্ঠু পরিবেশ বজায় রাখতে এবং কন্টেন্ট
                      ক্রিয়েটরদের মধ্যে ভাতৃত্ব এবং সৌহার্দ্য ধরে রাখতে আমরা
                      প্রথম বারের মতো আয়োজন করেছিল লাইভ গ্র্যান্ড টেক আড্ডা
                      যেখানে উপস্থিত ছিলেন বাংলাদেশের জনপ্রিয় প্রোগ্রামিং
                      কন্টেন্ট ক্রিয়েটররা।
                    </p>
                    <Button>ভিজিট করুন</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="communiti-card-group">
                <div className="card">
                  <div className="card-body">
                    <img src={codingImg} alt="" />

                    <h5>কোডিং প্রতিযোগিতা</h5>
                    <p>
                      আমরা বাংলাদেশের সকল প্রোগ্রামার মধ্যে একটি সুন্দর কোডিং
                      প্রতিযোগিতা আয়োজন করে থাকি যেখানে আমাদের দেশের অনেক আগ্রহি
                      প্রোগ্রামারা অংশ গ্রহণ করে থাকে। এই আয়োজনে আমরা আমাদের
                      পক্ষ থেকে পুরুষ্কার এর ব্যবস্থা করি। এতে সবাই অনেক উৎসাহ
                      পায় বলে আমারা আশা করি।
                    </p>
                    <Button>ভিজিট করুন</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Communiti;
