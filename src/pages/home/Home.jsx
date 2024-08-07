import { Card, CardBody } from "react-bootstrap";
import "./Home.scss";
import { FiVideo } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineTexture } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Communiti from "../../components/communiti-contribution/Communiti";
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import leaderphoto from "../../assets/image/1.jpg";
const Home = () => {
  const [mode, setMode] = useState(false);
  return (
    <>
      {/* banner section */}
      <div className="banner">
        <div className="container ">
          <div className="row">
            <div className="col">
              <div className="row banner-area">
                <div className="col-md-6 pe-3 left">
                  <Card>
                    <CardBody>
                      <img src="https://learnwithsumit.com/_next/image?url=%2Fassets%2Fimages%2Frnext-thumb.png&w=640&q=75" />
                      <p className="pt-3">
                        ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও
                        আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট
                        ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিয়্যাক্ট
                        ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের
                        বিশ্বাস।
                      </p>
                      <button className="left-btn">
                        {" "}
                        <FiVideo /> কোর্সের বিস্তারিত
                      </button>
                      <p
                        style={{
                          paddingTop: "10px",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        <IoIosInformationCircleOutline /> কোর্সে এনরোল করার সময়
                        শেষ হয়ে গিয়েছে, আপনি এখন এনরোল করতে পারবেন না।
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div
                  className="col-md-6 ps-3 right "
                  style={{ textAlign: "right" }}
                >
                  <Card>
                    <CardBody>
                      <img
                        src="https://learnwithsumit.com/_next/image?url=%2Fassets%2Fimages%2Freact-redux-thumb.png&w=640&q=75"
                        className="w-100"
                      />
                      <p className="pt-3">
                        ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও
                        আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট
                        ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিয়্যাক্ট
                        ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের
                        বিশ্বাস।
                      </p>
                      <button className="right-btn">
                        {" "}
                        <FiVideo /> কোর্সের বিস্তারিত
                      </button>
                      <p
                        style={{
                          textAlign: "left",
                          paddingTop: "10px",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        <IoIosInformationCircleOutline /> কোর্সে এনরোল করার সময়
                        শেষ হয়ে গিয়েছে, আপনি এখন এনরোল করতে পারবেন না।
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tutorial section */}
      <div className="tutorial">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="tutorial-content-box">
                <img src="https://learnwithsumit.com/_next/static/media/Prerequisite.b0ff46bc.svg" />
                <h3>
                  অসাধারণ <span>টিউটোরিয়ালস</span>
                </h3>
                <p>
                  আমাদের ইউটিউব চ্যানেলে এখন পর্যন্ত ৩৫০ টিরও বেশি অসাধারণ
                  টিউটোরিয়াল দিয়েছে যেগুলো ভালভাবে অনুসরণ করলে একজন লার্নার এর
                  ওয়েব ডেভেলপমেন্ট যাত্রা অনেক সহজ হবে। সেই সাথে সহজ সরল
                  প্রাঞ্জল এবং সাবলীল বাংলা ভাষায় বোঝানোর ধরণ প্রোগ্রামিং এর
                  জটিল বিষয়গুলোর প্রতি ভয় দূর করবে বলে আমাদের বিশ্বাস।
                </p>
              </div>
            </div>
            <div className="col-md-8 tutorial-item-area">
              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div className="icon">
                        <IoLogoJavascript />
                      </div>
                      <h4>জাভাস্ক্রিপ্ট ফর বিগিনার্স</h4>
                      <p>বিগিনার দের জন্য সম্পূর্ণ ফ্রি জাভাস্ক্রিপ্ট সিরিজ।</p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div
                        className="icon"
                        style={{ backgroundColor: "#F97316" }}
                      >
                        <MdOutlineTexture />
                      </div>
                      <h4>DOM প্লেলিস্ট ফর বিগিনার্স</h4>
                      <p>DOM সম্পর্কে সুন্দর ধারণা দিবে এই ফ্রি প্লেলিস্টটি</p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div className="icon">
                        <IoLogoJavascript />
                      </div>
                      <h4>মডার্ন জাভাস্ক্রিপ্ট ফর বিগিনার্স</h4>
                      <p>
                        বিগিনার দের জন্য সম্পূর্ণ ফ্রি মডার্ন জাভাস্ক্রিপ্ট
                        প্লেলিস্ট
                      </p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div
                        className="icon"
                        style={{ backgroundColor: "#38BDF8" }}
                      >
                        <FaReact />
                      </div>
                      <h4>থিংক ইন এ রিয়্যাক্ট ওয়ে </h4>
                      <p>
                        বিগিনার ফ্রেন্ডলি সম্পূর্ণ ফ্রি বাংলা React.js
                        প্লেলিস্ট।
                      </p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div
                        className="icon"
                        style={{ backgroundColor: "#334155" }}
                      >
                        <FaNodeJs style={{ color: "#83CD29" }} />
                      </div>
                      <h4>Node.js বাংলা সিরিজ</h4>
                      <p>Express Node ও MongoDB টিউটোরিয়াল সিরিজ </p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-type">
                <div className="card">
                  <div className="card-body">
                    <div className="box">
                      <div
                        className="icon"
                        style={{ backgroundColor: "#0F172A" }}
                      >
                        <SiTailwindcss style={{ color: "#16BFB8" }} />
                      </div>
                      <h4>Tailwind CSS সিরিজ </h4>
                      <p>সম্পূর্ণ ফ্রি বাংলা টেইলউইন্ড সিএসএস সিরিজ</p>
                      <button>
                        <FiExternalLink /> ভিডিও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Communiti mode={mode} setMode={setMode} />

      {/* adminSpace section */}
      <div className="adminSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="title">
                <h1> প্রতিষ্ঠাতা সম্পর্কে কিছু কথা</h1>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="img_frame">
                    <img src={leaderphoto} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="speach">
                    <p>
                      সুশিক্ষা জাতির মেরুদন্ড। আর এই মেরুদন্ড গড়ে তুলতে হয় একদম
                      শুরু থেকে। তাই প্রাথমিক শিক্ষার গুরুত্ব সবচেয়ে বেশি।
                      প্রাথমিক শিক্ষা যদি যথাযথ ভাবে দেয়া যায় তবে মাধ্যমিক এবং
                      উচ্চ স্তরের ধাপ খুব সহজে অতিক্রম করা সম্ভব। আর প্রাথমিক
                      শিক্ষা যথাযথ না হলে শিক্ষার্থীর জন্য পরবর্তী প্রতিটি
                      পদক্ষেপ কঠিন হয়ে দাড়ায়। শিশুর প্রাথমিক শিক্ষা যথাযথ ভাবে
                      দেয়ার লক্ষ্যে কাজ করে যাচ্ছে শুরু থেকে। ২০১২ সালে
                      প্রতিষ্ঠিত এই প্রতিষ্ঠান থেকে অনেক ছাত্র আজ দেশকে এগিয়ে
                      নেয়ার কাজে অংশ গ্রহণ করছে। প্রতিষ্ঠানটির নির্বাহী
                      পরিচালকের দায়িত্ব পালন ছাড়াও ব্যক্তিগত ভাবে আমি আমার
                      সর্বোচ্চটুকু দিয়ে ভালো কিছু করার চেষ্টা করছি। আমি
                      প্রতিষ্ঠানের সর্বাঙ্গীন মঙ্গল কামনা করি। সেই সাথে
                      প্রতিষ্ঠানের অগ্রগতিতে অভিভাবক সহ সকলের সহযোগিতা কামনা
                      করি।
                    </p>
                    <h4>পরিচালক</h4>
                    <h6>প্রতিষ্ঠাতা - নাম</h6>
                    <img src={logo} alt="" style={{ width: "30px" }} />
                    <p style={{ fontSize: "12px" }}>
                      ট্রেড লাইসেন্স - TRAD/DNCC/xxxxx/xxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* learner section */}
      <div className="learner">
        <div className="container">
          <div className="learner-top">
            <img
              src="https://learnwithsumit.com/_next/static/media/peep1.f4841716.svg"
              alt=""
            />
            <h2>
              <span> লার্নাররা</span> আমাদের সম্পর্কে যা ভাবেন{" "}
            </h2>
            <h4>লার্নাররা সর্বদাই আমাদের প্রতি তাদের ভালবাসা প্রকাশ করেছেন</h4>
          </div>
          <div className="comment-area">
            <div className="learner-comment">
              <div className="card">
                <div className="card-body">
                  <div className="profile-pic">
                    <img
                      src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75"
                      alt=""
                    />
                    <div className="user-info">
                      <h6>Rafe Uddaraj Official</h6>
                      <p>commented on Youtube</p>
                    </div>
                  </div>
                  <div className="comments">
                    <p>
                      dada bangladesh e emon creator ache ami jantam nah. vabtam
                      traversy media, academind, neso academy, etc ei gular moto
                      better quality keu dite parbe nah bangladesh e kintu dada
                      aponar video quality thik oder thekeo beshi efficient. ami
                      abar o gorbito aponar moto contain creator ache amar desh
                      e. ei video dekhe flex-box er concept ekdom clear. salute
                      dada
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="learner-comment">
              <div className="card">
                <div className="card-body">
                  <div className="profile-pic">
                    <img
                      src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMd-Shoharab-PK.831d6447.jpg&w=48&q=75"
                      alt=""
                    />
                    <div className="user-info">
                      <h6>Md Shoharab PK</h6>
                      <p>commented on Facebook</p>
                    </div>
                  </div>
                  <div className="comments">
                    <p>
                      Sotti dada apnar video te animation use korar jonno aro
                      valo kore bujha jai r aitar jonno apnar onek kosto korte
                      hoi. (Olpo kicudin video editing niye kaj korcilam taijani
                      avabe akta video edit korte kotota gham jhorate hoi). Best
                      wishes dada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="learner-comment">
              <div className="card">
                <div className="card-body">
                  <div className="profile-pic">
                    <img
                      src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTanvirul-Islam.467e8c31.jpg&w=48&q=75"
                      alt=""
                    />
                    <div className="user-info">
                      <h6>Tanvirul Islam</h6>
                      <p>commented on Facebook</p>
                    </div>
                  </div>
                  <div className="comments">
                    <p>
                      ভাই আপনার ভিডিও আর অন্য চ্যানেল এর ভিডিও, বােঝানাের প্রসেস
                      সম্পূর্ণ আলাদা। জাস্ট মাইন্ড ব্লোয়িং। ভাই আপনার কাছ থেকে
                      এমন ভিডিও আশা করি সবসময় আমরা।
                    </p>
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

export default Home;
