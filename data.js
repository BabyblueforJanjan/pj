// data.js
const attractions = [
    {
        id: 1,
        name: "บึงแก่นนคร",
        description: "สวนสาธารณะใจกลางเมืองขอนแก่น เหมาะสำหรับพักผ่อนและออกกำลังกาย",
        address: "ถนนรอบบึง ต.ในเมือง อ.เมือง จ.ขอนแก่น",
        hours: "24 ชั่วโมง",
        phone: "043-221-173",
        images: [
            "3.jpg",
            "2.jpg",
            "1.jpg"
        ],
        coords: { lat: 16.4321, lon: 102.8236 }
    },
    {
        id: 2,
        name: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
        description: "แหล่งเรียนรู้ซากดึกดำบรรพ์ไดโนเสาร์ที่สมบูรณ์ที่สุดในประเทศไทย",
        address: "ต.ในเมือง อ.เวียงเก่า จ.ขอนแก่น",
        hours: "09:00 - 17:00 น.",
        phone: "043-438-246",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.6789, lon: 102.3456 }
    },
    {
        id: 3,
        name: "วัดหนองแวง",
        description: "วัดเก่าแก่ที่สำคัญของจังหวัดขอนแก่น มีพระธาตุ 9 ชั้นที่สวยงาม",
        address: "ถ.กลางเมือง ต.ในเมือง อ.เมือง จ.ขอนแก่น",
        hours: "06:00 - 18:00 น.",
        phone: "043-243-330",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4356, lon: 102.8367 }
    },
    {
        id: 4,
        name: "สวนสัตว์ขอนแก่น",
        description: "สวนสัตว์ที่ใหญ่ที่สุดในภาคอีสาน มีสัตว์หลากหลายชนิดให้ชม",
        address: "ถ.ศรีจันทร์ ต.ในเมือง อ.เมือง จ.ขอนแก่น",
        hours: "08:30 - 17:30 น.",
        phone: "043-221-766",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4234, lon: 102.8198 }
    },
    {
        id: 5,
        name: "หมู่บ้านงูจงอาง",
        description: "แหล่งเรียนรู้เกี่ยวกับงูพิษและการแสดงจับงู และ มีผู้เชี่ยวชาญด้านงู",
        address: "บ้านโคกสง่า ต.ท่าพระ อ.เมือง จ.ขอนแก่น",
        hours: "09:00 - 17:00 น.",
        phone: "043-261-234",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4567, lon: 102.8789 }
    },
    {
        id: 6,
        name: "วัดทุ่งเศรษฐี",
        description: "วัดที่มีสถาปัตยกรรมไทยอีสานผสมผสานล้านนา สวยงามมาก",
        address: "ต.พระลับ อ.เมือง จ.ขอนแก่น",
        hours: "06:00 - 18:00 น.",
        phone: "043-236-747",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4789, lon: 102.8543 }
    },
    {
        id: 7,
        name: "อุทยานแห่งชาติภูเวียง",
        description: "แหล่งท่องเที่ยวทางธรรมชาติที่สวยงาม มีน้ำตกและรอยเท้าไดโนเสาร์",
        address: "ต.ในเมือง อ.ภูเวียง จ.ขอนแก่น",
        hours: "06:00 - 18:00 น.",
        phone: "043-291-334",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.7012, lon: 102.3789 }
    },
    {
        id: 8,
        name: "พระมหาธาตุแก่นนคร",
        description: "พระธาตุ 9 ชั้น สถาปัตยกรรมอีสานร่วมสมัย สูง 80 เมตร",
        address: "ถ.กลางเมือง ต.ในเมือง อ.เมือง จ.ขอนแก่น",
        hours: "06:00 - 18:00 น.",
        phone: "043-241-978",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4432, lon: 102.8345 }
    },
    {
        id: 9,
        name: "สวนประติมากรรมเฉลิมพระเกียรติ",
        description: "สวนประติมากรรมขนาดใหญ่ใจกลางเมือง เหมาะแก่การพักผ่อน",
        address: "ถ.ศรีจันทร์ ต.ในเมือง อ.เมือง จ.ขอนแก่น",
        hours: "24 ชั่วโมง",
        phone: "043-224-111",
        images: [
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400",
            "https://via.placeholder.com/800x400"
        ],
        coords: { lat: 16.4345, lon: 102.8234 }
    }
];