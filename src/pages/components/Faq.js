import React from "react";
import "../assets/css/Faq.css";
import Graph from "../assets/img/Graph.svg";
import Tri from "../assets/img/Triangle.svg";
import Flag from "../assets/img/Saly-15.svg";

const Faq = () => {
  return (
    <>
      <section className="faq-section" id="faq">
        <img src={Graph} alt="" className="graph" data-aos="fade-right" />
        <img src={Tri} alt="" className="tri" data-aos="zoom-in" />
        <img src={Flag} alt="" className="flag" data-aos="fade-left" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 offset-md-12">
              <div className="faq-title text-center pb-3" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-md-12 offset-md-12">
              <div className="faq" id="accordion" data-aos="fade-down">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        <span className="badge">1</span>Kapan dan dimana IT BCC
                        ini dilaksanakan?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Rangkaian acara IT BCC akan dilaksanakan pada bulan
                        Februari – April 2021. IT BCC akan dilaksanakan secara
                        daring.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-2"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-2"
                      >
                        <span className="badge">2</span>Bagaimana kompetisi IT
                        BCC ini dilaksanakan?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    className="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        a. Registration <br />
                        - Peserta diharuskan melakukan registrasi melalui
                        it.bcc.mtf.co.id, kemudian membuat akun Kalibrr melalui
                        www.kalibrr.com. <br />
                        - Peserta mengisi tes kualifikasi awal yang
                        diselenggarakan oleh pihak Kalibrr. <br /> <br />
                        b. Idea Selection <br />
                        - Ide yang sudah dikumpulkan oleh peserta, akan dinilai
                        oleh panitia dan akan diumumkan melalui email masing –
                        masing peserta yang terdaftar. <br /> <br />
                        c. Workshop <br />
                        - Peserta yang lolos tahapan seleksi ide, wajib
                        mengikuti workshop yang diadakan oleh panitia. <br />
                        - Informasi lengkap mengenai workshop akan diberikan
                        melalui email masing – masing peserta yang lolos ke
                        tahapan workshop. <br /> <br />
                        d. App submission <br />
                        - Peserta dapat mengembangkan dan membuat prototype ide
                        mereka masing – masing selama 20 hari. <br />
                        - Bagi peserta yang sudah menyelesaikan prototype ide,
                        akan mengirimkan ke pihak panitia melalui email. <br />
                        - Ketentuan terkait dengan app submission akan
                        diberitahukan melalui email masing – masing peserta yang
                        lolos ke tahapan ini. <br /> <br />
                        e. Final <br />
                        - Peserta yang lolos ke tahapan final, akan melakukan
                        presentasi dengan para juri kompetisi IT BCC. <br />-
                        Peserta akan melakukan demo dan presentasi melalui
                        daring. Masing – masing peserta tidak harus berkumpul
                        dalam 1 lokasi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-3"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-3"
                      >
                        <span className="badge">3</span>Bahasa pemograman apa
                        yang bisa digunakan?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    className="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Peserta dibebaskan untuk menggunakan bahasa pemograman
                        yang dikuasai oleh peserta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-4">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-4"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-4"
                      >
                        <span className="badge">4</span>Siapa saja yang
                        diperbolehkan mengikuti IT BCC ini?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-4"
                    className="collapse"
                    aria-labelledby="faqHeading-4"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        a. Kompetisi ini merupakan kompetisi berkelompok yang
                        terdiri dari minimal 2 orang dan maksimal 3 orang.{" "}
                        <br /> <br />
                        b. Peserta dapat berprofesi sebagai mahasiswa maupun
                        profesional yang tertarik dengan pengembangan teknologi
                        dan menyelesaikan permasalahan yang terkait
                        multifinance. <br /> <br />
                        c. Salah satu anggota tim harus menguasai software
                        development, data analyst, dan sejenisnya. <br /> <br />
                        d. Peserta yang berprofesi diluar mahasiswa, tidak
                        diperkenankan untuk terikat dalam suatu ikatan kerja
                        pada sebuah badan hukum, ataupun karyawan PT Mandiri
                        Tunas Finance. <br /> <br />
                        e. Peserta yang memenangkan perlombaan diwajibkan untuk
                        menyelesaikan project bersama dengan PT Mandiri Tunas
                        Finance. <br />{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-5">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-5"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-5"
                      >
                        <span className="badge">5</span>Jika saya sudah bekerja
                        di sebuah perusahaan, apakah masih bisa mengikuti
                        perlombaan?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-5"
                    className="collapse"
                    aria-labelledby="faqHeading-5"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Seperti penjelasan kriteria untuk peserta di poin nomor
                        5, jika kamu terikat ikatan kerja pada sebuah badan
                        hukum, dalam hal ini adalah karyawan dari sebuah
                        perusahaan, maka kamu belum bisa mendaftar sebagai
                        peserta kompetisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-6">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-6"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-6"
                      >
                        <span className="badge">6</span>Apakah peserta dikenakan
                        biaya pendaftaran?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-6"
                    className="collapse"
                    aria-labelledby="faqHeading-6"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        <span className="badge">6</span>Apakah peserta dikenakan
                        biaya pendaftaran?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-7">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-7"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-7"
                      >
                        <span className="badge">7</span>Apakah saya wajib
                        mengikuti workshop yang akan diadakan nanti?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-7"
                    className="collapse"
                    aria-labelledby="faqHeading-7"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Jika kamu lolos sampai ke tahapan workshop, kamu wajib
                        mengikuti workshop karena event tersebut adalah salah
                        satu rangkaian perlombaan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-8">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-8"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-8"
                      >
                        <span className="badge">8</span>Apakah saya dapat submit
                        ide lebih dari satu kategori?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-8"
                    className="collapse"
                    aria-labelledby="faqHeading-8"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Ya, kamu diperkenankan untuk dapat submit lebih dari 1
                        kategori.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-9">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-9"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-9"
                      >
                        <span className="badge">9</span>Apakah ada kontak yang
                        bisa dihubungi jika masih memiliki pertanyaan lebih
                        lanjut mengenai acara ini?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-9"
                    className="collapse"
                    aria-labelledby="faqHeading-9"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Silahkan email melalui ke <b>talent@mtf.co.id</b>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-10">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-10"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-10"
                      >
                        <span className="badge">10</span>Bolehkah saya mendaftar
                        lebih dari satu tim?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-10"
                    className="collapse"
                    aria-labelledby="faqHeading-10"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Kamu tidak diperkenankan untuk mendaftar lebih dari satu
                        tim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-11">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-11"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-11"
                      >
                        <span className="badge">11</span>Seperti apa kriteria
                        penilaian yang dilakukan dalam mencari finalis?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-11"
                    className="collapse"
                    aria-labelledby="faqHeading-11"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Kriteria penilaian ide adalah originalitas, tepat guna,
                        desain UI dan UX, dan solusi yang ditawarkan bermanfaat
                        pada proses bisnis perusahaan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
