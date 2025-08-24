import { Link } from "react-router-dom";
import "../css/AboutPage.scss";
import bgImage from "../assets/cidir duzu.jpg";
function About() {
  return (
    <>
      <div className="about-header">
        <h2> Xarı Travel-ə xoş gəlmisiniz! </h2>
        <p>
          Burada hər səyahət bir tarix, hər addım bir hekayə, hər mənzərə isə
          unudulmaz xatirəyə çevrilir!
        </p>
        <p>
          Biz <strong>Xarı Travel </strong> olaraq inanırıq ki, Qarabağ yalnız
          bir məkan deyil – o, ruhunuzu zənginləşdirən, köklərinizə bağlayan,
          tarixin və təbiətin qovuşduğu müqəddəs bir torpaqdır. Şuşadan
          Xankəndiyə, Cıdır düzündən Xarı bülbülün diyarına qədər hər küncündə
          öz hekayənizi yaşaya bilərsiniz.
        </p>
      </div>
      <div className="xariReason">
        <h2> Niyə Xarı Travel?</h2>
        <div className="xariReason__grid">
          <div className="xariReason__col">
            <div className="xariReasonCard">
              <h3>Zəngin Tarix və Mədəniyyət</h3>
              <p>
                Qarabağın qədim abidələri, qalaları, məscidləri və musiqisi ilə
                tanış olun. Hər addımda tarixə toxunun.
              </p>
            </div>

            <div className="xariReasonCard">
              <h3>Təbiətin Möcüzəsi</h3>
              <p>
                Cıdır düzü, Xarı bülbülün vətəni, dağların əzəməti – hər
                mövsümdə fərqli bir gözəllik sizi qarşılamaqda.
              </p>
            </div>

            <div className="xariReasonCard">
              <h3>Rahat və Təhlükəsiz Səyahət</h3>
              <p>
                Peşəkar komandamız sizə komfortlu, təhlükəsiz və zövqlü bir
                səyahət təcrübəsi təqdim edir.
              </p>
            </div>
          </div>

          <div className="xariReason__col">
            <div className="xariReasonCard">
              <h3>Yerinizdən Asılı Olmadan Əlçatan</h3>
              <p>
                İstər tək, istər ailənizlə, istər dostlarınızla – biz hər kəs
                üçün fərqli tur paketləri təklif edirik.
              </p>
            </div>

            <div className="xariReasonCard">
              <h3>Unudulmaz Xatirələr</h3>
              <p>
                Səyahət sadəcə gəzmək deyil, ruhunuza toxunan, yaddaşınıza həkk
                olunan bir təcrübədir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mission-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="mission-content">
          <h2>Biz sadəcə bir tur şirkəti deyilik!</h2>
          <p>
            Bizim missiyamız Qarabağın gözəlliklərini, tarixini və mədəniyyətini
            dünyaya tanıtmaq, hər kəsə bu müqəddəs torpaqları kəşf etmək imkanı
            yaratmaqdır. Sizi həm ruhən zənginləşdirəcək, həm də həyatda yeni
            üfüqlər açacaq bir yolçuluğa dəvət edirik.
          </p>
          <Link to="/turlar" className="button">
            Qarabağı indi kəşf et!
          </Link>
        </div>
      </div>
    </>
  );
}
export default About;
