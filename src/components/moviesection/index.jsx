import "./styles.css";
import {Row} from "../movierows";

export const MovieSection = () => {
    return (
       <div className= "row_section">   
            <Row title ="My List" a href= "www.google.ca/" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaxHNxilsGjcApPGRSPFBh6mHwBvDqQgmj912XmQeD1rnMU0ltveXmpnQX7YBcEk7qze3dz8aRRwom4z1Jw9H4nlUgPNGeIMrf8Ip3OTHRT5JGVG_bGiU5Zi1-6_sTqEznYjk5DC8mvx_dSKZzvigsyjDWuRr0S2080LVMokCUCCTg70Z0umep8.jpg?r=347",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYh2RwIK1bFL3T_H6iGFHVDk6L7VZJ1PEF_cy3Mos7RLhcS1SeBzBNFmYWkR6A3tvWMnfUEFqi5sgCXUlmDW6yJr9yA.webp?r=d6b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQO417AoaMguF_DtQ1zOivjKkMZEpP5zA1YFG1zwSewxnHSW3UyRVVbIUbhMdVsXnZzFolmiO9x3tteyklzoM_fZ9VA.webp?r=a8a",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWQ4jsQc0zOfEeNgAuZcS4eQowKX6o4sRL9zuwUkY2HeSJol0UIIG7J5UpyI1o-bInGchCmscQLEQxIKteISQrtBf8.webp?r=4fc",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7gpAvKYBeZlo3-CvaSvD8Wtqc024kJwMDVAbHXoF-vUdZn0i9eQdCGfLMAh4CMDwgnFFF-7rSeB4CyR0ZcHw6aGGnKy1tfgoW0OoX9KZd1GtMNrQAe-VxYpNpp.jpg?r=970",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQdL26JtWVW6y_E5HAEfUP26BqhIYCSL8qcgLu7hp8VxxXA5FHXSV5M2JIuA5LiP1HTbkbhZSFt3_OAL3YByH9CS0bs.webp?r=3b7",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4A0CaNPH22A1WKMTrYyQ81LWJ5gU6RtGoZm5Ir7XPG6p6bENmouclX4PpQC0abf14_3SpeEn2Rhvjbu8fH1rDli0E.webp?r=a52",]} />
           
            <Row title = "Continue Watching" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbZvt_WMp9pK5lICbW62eEsaiRTUgK8VYoPh2ng5W824kX_NCCfhIkmNWVYZV1ShekdKbNxrCcm-zBaFujTShBHNP0g.webp?r=692",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQXJ1aiyxmGvhQCHPLvUvrfZFKjn91HJM1D2KXOz5KvzQhhPAUpxzIe5noUBh2jY5Bt_gEO6UTqZYrb-oAL0rrDtpno.webp?r=913",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZgZF-lG6X-5dTg_0zPIFgktbLirbn7PUSnHgYg1xH3-xEYSWnarL_wHg4Ey9H3PadiYEEEe7TCAhMJUWpZ4SWvoh4igKjeBeoFHlnkxX4UEgiuvLbjhTLXz_df3.jpg?r=e4f",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVA5Iyr1ZdSeiFSI-ciUQ4XIGrX9Skrsfn5VHp0UvBzBYx9Z2iKyoD0ZCLVdh5n2DlKJt4ClTnsQryosbYhRYoZMElTou5smfzbVxN9Gr3-zZQwyD1uy3h9nnQ3D.jpg?r=ab0",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSPvvmQpW3nmNj-OIPF2ziqHL8dxpPF-47-iNvd0ExQiALCSMLIABNl2kH5rI9jprv87NHIlr7bifPhmOx5ZnMtyfwE.webp?r=d04",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFNBTENB-cGPW-yybe6GQ2wN0nQRufG8Lv8dQYZWy0H9-CeSsUgWh2EEV3yY3ofO5-8rM0EJ6BQM_7Le16KVsOz9InCFDChuLyN1TX3FEvDXXrOz-du9dp8pYrX.jpg?r=be1",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW2B1QlVpFWWdNbWyRCyPYnwsA-PhukGdScz_T8M2v11vfsl6xzWGEm5xVCKGncCTkjMyT7I9msC2KikWUdp87elTdCCXwA5nXuaqhrnxD9GMPdiinbTejKfVMUB.jpg?r=b24"]} />
           
            <Row title = "Popular on Netflix" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRBULY7SePJ3KlNLVvLP9NvZOn1aWYYmlGxlY_EaVOJwLzIGO23OteZNifx6vlNViOkND1WZQ5jOIJCLPqcBbJ7z7wknNMTCTKU6DY4YyatX9QVYAS0E8v5XfbHQ.jpg?r=756",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR8xeFZCPbiBnClRVI7AgoJ1gDpmR7DspsDJH7CUsJIdVYJbTr-HciBcqpSOhJOQFBSsb1hIEOfqkpsmK6jn7Vmk9yA.webp?r=916",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQtQk3FUgfJyI9Cm2dzcGbKxa-tOkqmOiAmC7pFpUFxISiMLuyOn3hMqTWsHjxEnMEgagfqvM-IPlh-fsQmnggSlo4c.webp?r=6ba",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkieUu44IRiYGgR8GoGRkCzBL89VQ5rv9sIPcfQZd1lA8MmcGHRup-7kl4qjMKBkwOtS8FMNvG2n-2_xUJbnKSebdsomAvvM0kHwap3uSjYrX2s0VzJdn4XJDY8HmtAUVo5qruWRE5vDNigoKz3nDkYZ0iN4Fxpq1i_mrlf2xJO0MTjoAp1xyI.jpg?r=169",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWiSqlqTX0kHK2nxW5RHXQcFVAZpF3FWHX60tpOqloNepzSL1fX4Zk6bV0VveA8aCkjX826Tm8GlWodKv_3lqqXEm7twkHfHoywwuP8uQDaqlmUL6nkG6z2sFSu0.jpg?r=f45",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWrqkyF3aPrG8xJKk4b7eJOr2pZJUfogtuUsdU1c6tPyWjSvq-ZSNfJupKd6OdZbUU_vXTQmuVPX5bK70fcYyedEX9Rs1pxDEoEGR-0CIylHtKMrQkkzb0jUHYOy.jpg?r=137",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSbQ2IxXPR26ndU9ojqLUqPljpMmtygbJJJSLXSvM9665ktunRMt56iIvCXwwWaFfYBX45kFPF2dzFh3Lorq4TZ6A9U.webp?r=7b1"]} />
            
            <Row title = "Trending Now" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABec3I5r50iSzFRHfzQ4juo0ZI6Ar6-2LS2sqEQ98RcyPo4pPm5caJMBQ2oX2x1pqt8N-zwoOIrzeb5TqHS6ZIRZNOyIbOFdknGSdPGeS8XTqr7BsC__p2Ram7Ctx.jpg?r=6b3",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABavXHhTr1yWWF62hAOh-bxBRxXuzV4Gt3Csf_0p043zFMMJI-Xurk7iVslLjA-vgQedPNd8Jgo5a2AatnPTmrBZ4IR3F9JprODoJgOTx4aMqueMzLUKSHi5JfSTL.jpg?r=e98",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8x9CXKzO2rMrD43rUjzKBok3ckUkKDDvMmt-jvSWQX4qhGC4Fza_Ej-X8mymTIMmBU2kzLWO2t-m-y4jd_BzftNH-yPtaHRCPVfcwqviN-tVaUJ2-WFDqUhPJp.jpg?r=6e9",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdbN4HzuHMJatDqaOrIJSMth7sLGfkNvKlT2jXe2rAn1AnExrDIJfmpuo2xcHuuvc6b1ajF1DEeVBKtI5bjI25FKMvLgj10Tujbumm_MylrJY6oV1DEI8NwbKyuj.jpg?r=246",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZq4TjUnTcL-hOi9rPAjCdB15o32_Ie_LOebvQ7hQrume9cYMIQjSd6Dnk0AQg2Vem96y1bjrf1FTTMdriOHxHWAednt-tkbw1Ro7qG3F1nIpIvaOfhcKJGYoMk3.jpg?r=a66",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXdgX50g1XhjgSrzb7D5hlIuKzXbwVJDpMlDbENn2hdAULHEfgyNXCCEEAKiAmqTJhhvvBnRqsL66iHx04IXlv9gj1NrHm6Ubnz6eC_NFGT59dR8jM3_gPghmzNi.jpg?r=63a",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQbHX8M3kJErNRTRoavRMOM5KRVM0sPb7UUMPObyIjCpeHg2bkXmZ28eqj4cl2BNE1Lo6A9eq55ZTwH39wIE5KnLCxnipoeeDTiMvHpyv3h0BYHRPTBHXPXKGuIKsQH8qudiIamnayNQMP_5iHQfDvQVyjV6Qw.jpg?r=71c"]} />
           
            <Row title = "Watch It Again" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQe4vHsPCNwt2lNLZLV2_ZlohPys36VfCd_YE-D2QL99sZ4lK74q9jl4piuSa5e7_he2vprdA0j4AA9kEHFCNDaQH8g.webp?r=84b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4A0CaNPH22A1WKMTrYyQ81LWJ5gU6RtGoZm5Ir7XPG6p6bENmouclX4PpQC0abf14_3SpeEn2Rhvjbu8fH1rDli0E.webp?r=a52",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfAxjeejaN-YwKkTRtXRtLORQ6R0dc-BXaEb8BDPoe3xPqw5-3lL9b7dzup8ELvgNmuUdWeXrO5WAH2uLR-lJkhXptQzO1H7ATNeYCm-J4k6JGrJw12Z6dQdA4r.jpg?r=dad",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQstJfQWmfq9qkArJzRrz-oNOgb4oxND8UYe5ChybGVuRdNd30Kdt54Df5NOibTLFngoEiUVBY8BuW0YqbsboWLpQ-tdsOWrIZgIJdbgvcxZujHfthY0sbkF5qH.jpg?r=e24",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABceCdqTFA16xwxPD5a4HmeCVz-yEnlIJgnJ_hoUOAeSbxPfOS0ecSsSh4Nt3a0f8JryY-sdvMntqSj1ch7Rhq-AOZLAejO_Lh6b9nJeAqxbBsuOGUhYE1dlTA2Op.jpg?r=e9b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd84uzac3VMdL3uuza8zMOfomOunWQmMmidbwEpecPA8zqQsKZWiPBjzshn4I-hrxdX5C444RanLZXL7iEjm9aeGHMw.webp?r=eea"]} />
       </div>
    );
};
