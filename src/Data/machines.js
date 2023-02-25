import blistera1 from "../images/blistera_1.jpg";
import lecho from "../images/lecho_glatt.jpg";
import bomboGlatt from "../images/bombo_glatt.jpg";
import encapsuladora from "../images/encapsuladora.jpg";
import ktp420 from "../images/ktp_420.jpg";
import mezcladorV1 from "../images/vblender_1.png";
import mezcladorV2 from "../images/Mezclador_V.jpeg";
import prexima800 from "../images/Prexima-800.jpg";
import tecnomaco from "../images/tecnomaco.jpg";

const machines = [
  {
    id: 'AF-0001',
    name: 'Lecho Glatt',
    img: lecho,
    status: 'clean',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0001',
  },
  {
    id: 'AF-0002',
    name: 'Mezclador en V1',
    img: mezcladorV1,
    status: 'maintenance',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0002',
  },
  {
    id: 'AF-0003',
    name: 'Mezclador en V2',
    img: mezcladorV2,
    status: 'process',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0003',
  },
  {
    id: 'AF-0004',
    name: 'Tableteadora KTP-420',
    img: ktp420,
    status: 'toBeCleaned',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0004',
  },
  {
    id: 'AF-0005',
    name: 'Tableteadora Prexima 800',
    img: prexima800,
    status: 'cleaning',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0005',
  },
  {
    id: 'AF-0006',
    name: 'Encapsuladora',
    img: encapsuladora,
    status: 'clean',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0006',
  },
  {
    id: 'AF-0007',
    name: 'Bombo Glatt',
    img: bomboGlatt,
    status: 'clean',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0007',
  },
  {
    id: 'AF-0008',
    name: 'Blistera 1',
    img: blistera1,
    status: 'clean',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0008',
  },
  {
    id: 'AF-0009',
    name: 'Envasadora Tecnomaco',
    img: tecnomaco,
    status: 'clean',
    lastCleanedDate: new Date('23-02-14'),
    assetCode: 'AF-0009',
  },
]

export default machines;
