import "./styles.css";
import {Row} from "../movierows";

export const MyList = () => {
    return (
       <div className= "mylist_movies">   
       <div className = "header_space"/>

            <Row title ="My List" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaxHNxilsGjcApPGRSPFBh6mHwBvDqQgmj912XmQeD1rnMU0ltveXmpnQX7YBcEk7qze3dz8aRRwom4z1Jw9H4nlUgPNGeIMrf8Ip3OTHRT5JGVG_bGiU5Zi1-6_sTqEznYjk5DC8mvx_dSKZzvigsyjDWuRr0S2080LVMokCUCCTg70Z0umep8.jpg?r=347",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYh2RwIK1bFL3T_H6iGFHVDk6L7VZJ1PEF_cy3Mos7RLhcS1SeBzBNFmYWkR6A3tvWMnfUEFqi5sgCXUlmDW6yJr9yA.webp?r=d6b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQO417AoaMguF_DtQ1zOivjKkMZEpP5zA1YFG1zwSewxnHSW3UyRVVbIUbhMdVsXnZzFolmiO9x3tteyklzoM_fZ9VA.webp?r=a8a",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWQ4jsQc0zOfEeNgAuZcS4eQowKX6o4sRL9zuwUkY2HeSJol0UIIG7J5UpyI1o-bInGchCmscQLEQxIKteISQrtBf8.webp?r=4fc",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7gpAvKYBeZlo3-CvaSvD8Wtqc024kJwMDVAbHXoF-vUdZn0i9eQdCGfLMAh4CMDwgnFFF-7rSeB4CyR0ZcHw6aGGnKy1tfgoW0OoX9KZd1GtMNrQAe-VxYpNpp.jpg?r=970",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQdL26JtWVW6y_E5HAEfUP26BqhIYCSL8qcgLu7hp8VxxXA5FHXSV5M2JIuA5LiP1HTbkbhZSFt3_OAL3YByH9CS0bs.webp?r=3b7",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4A0CaNPH22A1WKMTrYyQ81LWJ5gU6RtGoZm5Ir7XPG6p6bENmouclX4PpQC0abf14_3SpeEn2Rhvjbu8fH1rDli0E.webp?r=a52",]} />
           
            <Row title = "" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSto6IadFwWiQB5Ug5eN8yJomLooCRPUHG1LceNk5CmZhDnFGupU0ZtUExnEJ1Dbw4e8dql0n49Juf_T3WTw4lA-lKU.webp?r=5f7",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXfuN1iorFgdxDHm7UGjOI-6dhgY-6yRH1CGxTr6HLbrktU5L_T8ULUfOBYml7gZFGs1fZpBuk2YQAa6ZAPCTzZDyQg9Bl13WPhDWniUKUumf2yY5jszTzpGxp3s.jpg?r=7a4",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSzhWPfu3Yw2ystQBcVYc_qPBAS4FYdl1Xyu4OwoDwYC0Ca36G-mrERengbHS8NUtQ7Y6wpkJ8CZDScX4NDvESxDJexQtitbbet7Yy5Md_XotQk52KPO1nSRkCHS.jpg?r=d7e",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkFODrjBhylnjtVegC3WXM7LVZx8qtOGRtiy-cE__DudGVX_tHx-LXso0LXg_4eClxlcAEQRd1F03i5-fH4LI1JOEE.webp?r=927",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQsDPV8OdWHakEfwlvsFSHx0oPe4jQygSwAAZfpqtGs8u3DINCgc0C8kLxwtgFMfXdUgTNEntyJFSDsZuN9x1Xf_1AQ.webp?r=7a6",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ3shZdy_gZKSUqCBj3Nkoxcu7IZl2429OvJMcFakUTjdVTr2bQpQ4QiF0I3be6CqQBuEsBUx5qs4hUmFC_yUxypIZhCzrTcDvTMQ8fWsgAXn5k9ZmYIZAWiEI2O.jpg?r=4ec",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIfehKyB63VxwV_A0Oo6SInnkW_5eWpRmP4IzlOqx2mhm1plOYhvfhJ7zDY5N100HvmzEHxVTF0YXLh4oeZ6K_1md3GzD1vtg4xjvBdac5IV9TtH_KT7gQC-RNh.jpg?r=1d5"]} />
           
            <Row title = "" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXuJ7Is6vzHYJDDUJF1aQbubXM_tXLxvAn2nAFNy4m1RmR9nwO8aw76593lzLbtfPOPp-FGw_iv0GrXM9wS1hcvlpsY.webp?r=818",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXR8NGkZjTfNAmuT6nRc0SRsqHsVs3tuL7_4IoWVdcTXL7ZJfZ384dj0rPk3Mcoikcn2LPFbsGwbJUZUQEIgKXVNSrf5F50oHgVDilkVMRr660FSFkveP2xYaaZ6.jpg?r=64a",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW0r0hdM_gN9q3YVNWz97gx2VdfJeaHGdw0Y7f8OTTEY6eWw7sNeNwX_tBEWpVSum29q90dPBePGhwJ7JTrd_V8yr9R7XlB_7bi_0yzHhffQS8hu0-o9vK2e9sSd.jpg?r=b19",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYNhwIwB5U5ZmSPaW_GtmFju2AJcuWOGelLtxRFoL-NDS-NwvPQWA6SSLy51UdMcLz10ZZAZYq7CkpoAFElDnCDNxZ_iCPTIUVm91FsbL9ILTdtCpuXj4tTQBzZM.jpg?r=c51",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWiSqlqTX0kHK2nxW5RHXQcFVAZpF3FWHX60tpOqloNepzSL1fX4Zk6bV0VveA8aCkjX826Tm8GlWodKv_3lqqXEm7twkHfHoywwuP8uQDaqlmUL6nkG6z2sFSu0.jpg?r=f45",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSzhWPfu3Yw2ystQBcVYc_qPBAS4FYdl1Xyu4OwoDwYC0Ca36G-mrERengbHS8NUtQ7Y6wpkJ8CZDScX4NDvESxDJexQtitbbet7Yy5Md_XotQk52KPO1nSRkCHS.jpg?r=d7e",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWXVNnFmsdTtUBiy9Y5D9BLATbm_ufkDxKWneyFOabhuzdSkefQWWAbP76VvVn__LSPyyiS4o1fe9xxHeaIe-uxvu4.webp?r=0bb"]} />
            
            <Row title = "" images = {["https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSutjdxZ0ZcjGaM81Mgaj_W7ep7wwLdgWprxCl5qZjroljd99yJi8YvWsgtbPvTSIE96zfpDGneFPOSLGTPXvKe4NlU.webp?r=85c",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU8wQ5aeEb1VQknZ6dBCTbM3fWJ8E0JVTpZlhnwo3emxtqN5Q4eOHWMl0TQZbyuEPm1G6xXbnjB2WgQQeZASkUkPrO5Al5znP7oe7Cct1zmgyHR5unPRcMThnWjZYGAM-y3gQwvl2vJTm_l20nSXEmUf_491x0yS07-QdjTHRnhCJxa5S1u_BXfGOy147BNa7A2m_7_Ye_k8pezvbHixOo54.jpg?r=c8b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoO1uEoyWumx1PZfWDjAiJFgC7obP4QazwDKmzXgDSxgZJadBajaIU4VJXSKyAYjaV2IMg1mhyYs1j3Q8mORcxWPXQ.webp?r=b14",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBhvQX_CL6g_eLJ10c02j9T2GokD9UoynC0lRGZ0CLlAgVX8zPix3VnXrj4CZMJYMVeFwjNtxnx9q575tS3QDO5lKgTxOWF5Ie8WWk9KNpZgw7lkfN3lvX9KUBI.jpg?r=a5b",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYnd1vKTZmEbuKkqO4KL944JsXq-T4kv5UxdSq5MuFyZ8-27M7BH6HeqEEU4lnmdQyrAkNbj6ykCief-3kkjWv_MXsX9D0IXRt9yQPlGWNE31oW2ZNFOd5xMYLM3.jpg?r=a29",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWTSXW8ddfWlIbQMjy7hW440GgMjXhVU4eYfzaNL9cCxP2VnbDue17maduxzW_uytu7JdqiScGGo3oj3WlUxTC5ZVQI6H8Wk47yKU9pJWAQ5xmCs6hOA2kldCGXR.jpg?r=3e3",
                                            "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcdGFAXP6uSKe3VvWeWJY4F4xRKJVDF43o6g4cfkHcqqZ_tivcvQMBKzYzQ4uMP1cvMimKh8I230R0DSP9WCm7RrWAc.webp?r=e89"]} />
    
       </div>
    );
};
