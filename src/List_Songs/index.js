
// List Bai Hat

import Grils_Like_You from "./Girls.mp3";
import Nguoi_Quan_Trong_Nhat from "./Nguoi_Quan_Trong_Nhat.mp3";
import Vi_Yeu_Ma_Den from "./Vi_Yeu_Ma_Den.mp3";


import Avatar1 from "./../List_Icons/a1.jpg";
import Avatar2 from "./../List_Icons/a2.jpg";
import Avatar3 from "./../List_Icons/a3.png";

const songs = [
    {   
        id : 0,
        src: Grils_Like_You,
        title: "Grils_Like_You",
        artist: "Tăng Nhật Tuệ",
        image : Avatar1
    },
    {   
        id : 1,
        src: Nguoi_Quan_Trong_Nhat,
        title: "Người Quan Trọng Nhất",
        artist: "Hồ Việt Trung",
        image : Avatar2
    },
    {   
        id : 2,
        src: Vi_Yeu_Ma_Den,
        title: "Vì Yêu Mà Đến",
        artist: "Hoàng Yến Chibi",
        image : Avatar3
    }
];

export default songs;