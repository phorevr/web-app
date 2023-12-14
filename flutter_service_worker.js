'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "1965d98013d36d68c679a945e1df1988",
"/": "1965d98013d36d68c679a945e1df1988",
"CNAME": "95a83bbee26e0418c628ccbc6717b55b",
"main.dart.js": "e9caaa07e19f025a2e594fe99b065240",
"worker.js": "6722f44361a3b2e864fb2377de5a6f4d",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "91f8eac40527954652eec889dfd9171d",
"icons/Icon-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-512.png": "97d970ecbc890ca482820f110798d571",
"icons/Icon-512.png": "97d970ecbc890ca482820f110798d571",
"scripts/workers_api.js": "abca87b8d95e2d0ec2871358614f95fb",
"scripts/image_processor_worker.js": "d057a34fc7c20976831fdeaf25aefb18",
"scripts/image_processor_fallback.js": "20948b13987753025d9d15f776fad367",
"scripts/crypto_worker.js": "dfb80323de8a6ff7745cd45f6c5e670f",
"manifest.json": "0cf28e771cca8ccce3c9351ad0476a47",
".git/ORIG_HEAD": "28e98192a636a3cb08e594567c086c3b",
".git/config": "d7845af1b1e9c5616238707ba08dafa9",
".git/objects/92/807f0b687918f0c7d2ca87940bd31584aae845": "40fee15a2c07b2a45904abf06812b54d",
".git/objects/92/4621c79561ca1fb4e84ba00193996862a73947": "b8720e393ae9e3f1cee3d16935c5a022",
".git/objects/66/f978d9892482d5d5b79cce3303fde84caa124f": "9e4cc8d709dfecc4297db827840c0f6a",
".git/objects/50/38db11770fcf6ca31d06b4458efe05f6808858": "35c2fd35b277717208801e10e0f9ccee",
".git/objects/50/ad2996d4f99a66cd3199910df0884fdd6586bf": "56393c0bb1be2294d3448da1ce76d04a",
".git/objects/68/8935e8463ca14e4578b079bf1551323ef34ae6": "6279642653e562cf211cc97ea0315f28",
".git/objects/03/c4a5b7ed08d4161758f1bed544a6682fb6c7a9": "90c00ebe15004dda078db81486edbd51",
".git/objects/9b/bd2b377b4e75a5661f56c27800e1b8b4fe9fb2": "8121ef230a33996e12c152e99a1922e7",
".git/objects/04/258c83758966722dcd1b359e5f468174e51ca2": "d60b1de5618eac5d4e3673d92c1d2462",
".git/objects/32/db6695491c91f1b4b0b595674db7c20c47ce31": "bd78f33ac5566738bbba537c10be7bac",
".git/objects/67/df1487c4eefe9f540ba1334e35ec77fa44829e": "6cfb0cebbca4a55c1119f7ef72edc95d",
".git/objects/93/0c2cee3fe85329b1d16eee5216f49cecbcdb38": "1d6b4ecfcb09593bd8f108236c96e78d",
".git/objects/93/41de8bc94752e7ea41fe5dde71203e76100672": "9c0184df2d6f75690e24543ab446e88a",
".git/objects/94/25085467b9b11e6db84b3f325706c7565ab1e6": "55f354ab15c36f2d12b84e1f851607ff",
".git/objects/60/88f86a275b36cfa108fc97cf7290ef02d2f149": "08d028b0327e8adb51c72bdcc0b97f75",
".git/objects/34/22fb7908a13f042bb34e40abd36acf6443ab22": "199d9a650e32ad8106d46bea0838a20d",
".git/objects/5f/95176724c7da4930326534d4be99b88155fb7f": "0c98166362ff4c0bc2f9119ab85ba036",
".git/objects/33/a345096d05d0e7b4a0c8e959e6e757c776f42a": "931f77016c99d3337e9b716c3221f667",
".git/objects/33/f7ae693825a9511f0ec65f44d0457c7e7547be": "db4754c3e16e14327c8f1aab54f0b47a",
".git/objects/05/113bacae3816897d51657bbae3aa9711cccb4f": "8b1370171f059af3605c5ac2a111053e",
".git/objects/b5/05d54e9f250ff3ffd0f5a603c5da56177d76b1": "a5d508b1c5c77b4f45c911394801f483",
".git/objects/d9/b694ce86f3405a908534a928f6102407c1c701": "0b713e924d215b89bc8eff6a4c98f16f",
".git/objects/ac/487e4165db1e6eebce312ff9cc4639ddd4b8cd": "e9e21235694e96a9883fb702535ea4b8",
".git/objects/be/9204facefa4e5aaf1b567f393b803c738c801e": "f396889067461ff7730682f092be9a88",
".git/objects/da/61aab7ad9436cdda627a30e144361fdb9b62d8": "00b3eec1b9eb0d9e087d527bda5b1dea",
".git/objects/d1/c9ad915c8e8a5fac883e59031b118ee776f638": "9a54f5bcb3eb09549887494cf9176ca7",
".git/objects/d1/2e57e94b9661bed6001faf14f00efcf03bc370": "ec2e921727dbb3aa92b541b5d7317f8f",
".git/objects/d6/d4a9000fd16b71357a0eb1dc3c4cac85c25255": "6f6024541a80c641e1d30c7559f7730f",
".git/objects/bc/467fff750df76bead3dfdb009efe6498126380": "87b973d20e67002e10345694cc4c1362",
".git/objects/d8/d1447754794d8a9d19f25921fc1a7e48836cd4": "205ff59dca595ad0697c08d06dd36fd5",
".git/objects/e5/183c9b4b8aba19dc2fd8c6ba45756addb1d5eb": "654a8c885aa8538e48bd29470cd9cc61",
".git/objects/e5/eb76984defda935739f0afee9d70c2c0032e90": "70f6165f98c3e3c9671371b704085457",
".git/objects/f3/c804f68a14e79afb0a6e12421564b4ea4f33fd": "ceec79f7a7a2499cc5d1752998200e0f",
".git/objects/eb/0a770a4e18f5932ffbdda628fc7a94ff5d18c0": "ed98eae25dcd2002171f4e9b053afdcd",
".git/objects/c7/a16fe5b6bdec105eab4ca6f9b45e9a0261550a": "88cb7e208ddb5d916ccee6cd1f30c870",
".git/objects/ee/71ecba35eaf15e2a08873d28f4879df6e4f804": "3d265881c67e990b0278d5f99723c833",
".git/objects/ee/6de95ad1da33e29fc594443346e9f4fbe5ca62": "998ecc539ef9ce05ea80c1cf9f9be667",
".git/objects/c9/6951674b45b33f9d341763f7b8ba3629ebb5c8": "e64309056ac9653f7822d1cd1ae8ea7f",
".git/objects/c9/a527b747122fdd28caa3327704f3d3bc578737": "b280067b62c4314ef2758b3fda2ab47f",
".git/objects/fc/f7f4b0060a31f28c970719a38f3c9d0f63117d": "2654b1e46a61c5458edc65e5729f5398",
".git/objects/f2/b2dc5777d4df0f2ba70a506de8ede72bf3d772": "0eddb21140d274b3bac1a8ba8e391d04",
".git/objects/f2/87ce8cca59dfec3db261f7293787a3582ee213": "c23a779cf48aa9e068816bdadde210b8",
".git/objects/cf/076d6a2aff5affc23dd474c06d09aac31edada": "720dc049de7f2ce38823d205d8c8de08",
".git/objects/c8/dbd87cae93435b415f40d84ad97cb5fc5cb52f": "f933d36bac1b1e222010b423723dc3c7",
".git/objects/fb/f8703ee5e219a6ea701de0e5a35e23b71500df": "31965ea28c0ae983fce981ee6760f39c",
".git/objects/ec/77c255500ffdb89448ab06e47304fbce9161a2": "e51ac8b41bdb305b7c4b843de42c4b5c",
".git/objects/4e/26350f14c53d53a05391e4d33d83c37bb075b2": "bfb9c8bcce6d85eee44bde7c8f186932",
".git/objects/18/335b4016515fe7b1df3f10ed504da9618ff206": "0db8d53159706a75e93d6f3abd08d042",
".git/objects/4b/88cd115cf92163f347c74c7c85112b110df030": "bd5845865868720c427fb21af6c64ab9",
".git/objects/pack/pack-109072c9c93b9462e524e9c9be32ea2854ea319d.pack": "1998f18734f9be0294afb3f9a5cb9775",
".git/objects/pack/pack-109072c9c93b9462e524e9c9be32ea2854ea319d.idx": "69c60804e246d933a740561ba2f378d5",
".git/objects/29/a7141607625da4684c8a50a8bf09895733161e": "3a4a26ec922231b65cc34186b3ac3c5f",
".git/objects/45/009cf03585e3bf224dd4f7169ca461b30c91eb": "16db986ab67baba41cb8c6cb4bf7051f",
".git/objects/1a/cb6581dcf9aa47d9a9864916670a623eee80d9": "082bb8a277a4b1505a4555eb6679ee7b",
".git/objects/17/1f87f02702b729ded8b534bad59ef1704b2685": "e475029c9d987eba51f2950138dba885",
".git/objects/17/17625dc23752ca76a1517f2489f79f55b07e39": "9041ca4116e0e34461bd73cf8b3721a3",
".git/objects/26/73ef79aa3ff0727064caf94d399e25f5c13292": "6fd050a2e45ce193373bdb1fbd035f37",
".git/objects/81/67a6c7d49f5c940a1f07b7d6b9b0a9925db68e": "08e6f01dd7e3be85a1db2b6f8380fa7e",
".git/objects/72/879adc469c1bc2e789924186dcfe67e3f5ab4a": "527fe406fb2f2c1f359bd981a401d650",
".git/objects/2a/e0ad1bd7c4221a43e60bd83357b00a6c3bd40d": "313eb415249a596296d1cc1a115d9ccb",
".git/objects/2a/ccf2f5df8684e5948e193544616e7a4b353f93": "cfa461cc487bdfb8e27325e9d0129fd4",
".git/objects/2a/de67087e89f801fc4702878e7b2dc2ebf3fa57": "2feeabd5f8d3991ea004e36cfd2f2725",
".git/objects/88/bc8ed14f2d4af8e3512fc4127b4cae75a96611": "64ba99a6de4a3b7e07a32477d5bb4b5c",
".git/objects/9f/3f1146760da537054fdbf31a5ecee8171b3332": "d446c1829a689662fa9f4c3b40e5ec7a",
".git/objects/9a/06fd080867c4f62a85990fbb8ec513059c0ea6": "84349168ba13b58758393cfdf7ebb95a",
".git/objects/36/da792a2229203e28e980566682274c57e19d17": "c66927d450c3ade18f4ac3ca83d4b4ec",
".git/objects/65/8c7706e98adc0dfcab3ea2601e2b14fcb0eb95": "e4146b5bbe97fc40992dbd9a56972703",
".git/objects/62/5d523575f5d1d52d26397c1f698b12a05b8ecd": "a953a93a095faa69bf367a10dc646965",
".git/objects/96/65011463d0482a48d54dad424e33fb58d1ec8d": "b858def3fe39510c0865331e4c7a5a31",
".git/objects/37/8ad2497b72a902a9e1d8a6489d691e8ce0cbc0": "5f9666fedea8d4ee3d997b81b1a6b3b5",
".git/objects/01/4b72be884f8e5c28506cf29839c14045c5ecbe": "54fd724a079ab5ae589a0b84257fa67b",
".git/objects/6c/fdffad8a6c513892e73cc8912ecaa859a5e351": "10fec158a9085637ba1c8fb37b12bb84",
".git/objects/99/ba8f3e1e68bfa0510daa31d7d9c264491fc9a1": "6fc1526c542b17171fa4166d654010da",
".git/objects/55/82e7106af8f5efa8306c2d189bd566a9d3e12b": "9c9f12c5bd3621e04a4fb1e6647f4e16",
".git/objects/55/69a1ca1e9024b4e05f3493ef4eab9e81a1ef48": "2df8a6345661b0eed42e275c88a57b13",
".git/objects/55/f0c74b9f901c7c18d548c3a4cc9c4c62605f09": "570964fd9ff51e51e16cd8421180fe6d",
".git/objects/0f/595f05b7524c5fa18e92fcfea6f824467ff727": "1003213aa08add704f7876248ee61ac3",
".git/objects/0f/acaff5554e0f2dd6690cb62c25ee90900f1ad6": "5b7956ce6ed25a280e477886d2902085",
".git/objects/d3/38bb5b5022779c3889e7c306578babb1acbf1a": "0b87874aaa866914acbd1a7cbf28e101",
".git/objects/d4/bbe155c37db3d3db624eac4b83969fe50edd32": "29b478acd479fb920ba0a006fd10316e",
".git/objects/d4/2c30d03baa0ea7b6f9c65dc67aee8d72cbafc4": "2394487b30884583ae5a73e325fff1b3",
".git/objects/a0/ac010d19af6f84b56c7b318d2672e3f1c0130a": "42885a3eddca739431de541961010459",
".git/objects/a7/e13f232fa5bfd54f5648505f42f1efc07e1b40": "cee75484a841ab65827810c0abc04f70",
".git/objects/b8/d70923c89c8d25cfd1c9b5fc1563bb71e8a923": "183d0216dd729625ce5d1372078d918f",
".git/objects/b1/2058fd228b2d55dae501df1865105f396e2135": "98ec09afd31e9686818bf5e69fa5bb53",
".git/objects/dc/55437ae9c79411137d11559d8ae05ff51e0f2e": "992fc916707f317a5d73112daf67c5d4",
".git/objects/b6/47dd52917dd749d8d795b280a3421dd474c93a": "8ca5b7c7393655382d59abd7f8284822",
".git/objects/d5/6f4f97189dc1825321f95e0562094d99c47c0b": "87162ebd000e2c71995d186bb5c827e6",
".git/objects/d5/279d4f5d3016a33c9550bc9213bd94fd21f65c": "465d71f6389ecd1efd6bd083ef0aabe2",
".git/objects/d2/dcdc316f6615d4d5f50de09ac0b7af48d56b5e": "515736a8bedba1a717c4f3bb8196702c",
".git/objects/aa/841bff54b5428e50d897b419e3b1c59a12dc9a": "e0d06005fa6640da889dbe42f36a0091",
".git/objects/a8/e1c64c0b95fb89311b15c7df5ccce23e6a97f9": "6ba844267272d6c97cdd5fa782f3d7e0",
".git/objects/de/912e72317cc44f8c77e0913f6e7fa3847174b0": "c1d64174e7c25e7a3242938401abdb7a",
".git/objects/a6/589851da298c61e9edfe90db11e55f682fe026": "9b6eb67557c2b335607b024e7b5c54ff",
".git/objects/a6/bd538be1d0fefa4ebd46fb06505421c9e51733": "3617aad27e11bff533b721bcdac467d9",
".git/objects/a1/38ef853628d4eef4cd2e4c080296aec01a4020": "5776dc90b3e7f83134b0f96a6b053a22",
".git/objects/ef/086cabdb3b0e1f19fa5ddc1568a25cbf6ba9da": "40e81536847a52c910fb093e69872eb9",
".git/objects/c3/292a8bdd82a980fa529ef7811a0c720e331690": "306e7d94592a825ad7988590e75abb7f",
".git/objects/c3/465895e272256b6aeb59ee08e38c1f56072a1b": "b1c14eae5cd85d1f6f58d02f85fdc834",
".git/objects/c4/6e205143b01b813b5c2c2f3bd8bfaa6c83860e": "0a2fd4b0e52e1a964bd83b514f7e07db",
".git/objects/ea/bdec94d2cd033078404401a7160a65a4569c06": "762eba6219c76bc9ea1ba11057f2d668",
".git/objects/ea/d0e5eb058b444bf97af9e4fc83bbc51b3d3fde": "6bc0ecbc89d7e1055a1541639066ad44",
".git/objects/e1/1038161e15559adad306f7693ab07799d13ef4": "20d1ec26e5a578395b622aaf6840f7b4",
".git/objects/cc/028fbd2791bbb2d4c6dc99d3acdb6bf175281f": "0c05cbb9b388bca2fb6e0358982c091d",
".git/objects/cc/62260bbc34aeaac756ebea07e069aa39ab5886": "a25430ff01aec237afbcc9c2f4451a75",
".git/objects/f0/1076d06482977d9541d989ea4b8601169306d5": "12e86b47a22e6adf1b083c71d1215879",
".git/objects/e8/0d4f0cfb4de01bf95028c0ccfd80b6c7886ef6": "ae46bd926653b176ba1d0fb9facb3b5f",
".git/objects/c5/e14873003a85adc05bef26f4194aef0c96400a": "2d5559af09c6bf4818a8c8f86df9e15b",
".git/objects/e7/89a6144f2d1899381bc1ce6ec2aadf1e308925": "30252e84c8df35550a483662e704f3d7",
".git/objects/e0/5c54cf795b253e51e927266970f985334652dd": "7ee9478b2c87629cfb37c1b68bfe68ee",
".git/objects/79/e99d30dc754ee448f91239747354b41e9f539b": "c0ec6815cf523f902a3ddc107a8a5135",
".git/objects/2d/94440d1e79c83cc0dbbb0396e56dd5efd66a9f": "f0b16311ffa4fd5fdf9788ba1ef6e8bd",
".git/objects/41/f023be3073d21fafc2c0f5df818b6df5e3282d": "48d3c0d2be18446bbc15c49b760e6e48",
".git/objects/4f/3e891fd3e783669866f73872cc033a5b239e12": "8ce13ad8b85375de706d49cc61f9f9df",
".git/objects/15/20870a883058a9c2d687dcdeeb378eac42f311": "1cb972480acd220db9c69d31dc3fe4aa",
".git/objects/1d/3f3bae1ef905a5153d13fa3076665132145872": "8b88a039d658e971bdfebc18dbd58137",
".git/objects/71/580a9f1c6bf9029dfe219798c9ee2dd0a9cc7c": "053bb847b278f5567834a2e088fa7d12",
".git/objects/82/5410b796f6b4125e747430947a3ed57a26ec16": "a71d57c7ace2d1230378a3209f81be42",
".git/objects/49/2f9afcbfefdc65eef4a06eadc47357f7f39fc7": "b45dad0e53895e11da29ff7f54b959c9",
".git/objects/40/7c575f1afca870590893716098243d48f02797": "68e34aa6cb793d97e23de06a4605afc8",
".git/objects/2b/4857db40dfc69d20d58fbc7de7ed2a8d96f79c": "b4cd4ac5f0058f17d6d940487f71bee0",
".git/objects/47/0b754f96013109c659c12fb7698a84018ccb69": "9113a8aa41f32d7996b9042dfd32aa99",
".git/objects/78/a40e742c73b7b8f2d33b04a85058d57755a0e6": "4003eb680fda268e42bbc64f029f1395",
".git/objects/7f/9b3ab507e6923ffce40d20cfd2623bb3b6a3c9": "5b2304f4e4e8ed96c28b796be439148a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "1f63fb745b194c3191332de68b9e0b6e",
".git/logs/refs/heads/main": "9ddb8a8e549c8b3eb5544e99ae899312",
".git/logs/refs/remotes/origin/main": "a01e01b1e39fd3fddadfc963a78a5b93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "ddb9532edcca4ec3c9b69fbb53de4c56",
".git/refs/remotes/origin/main": "ddb9532edcca4ec3c9b69fbb53de4c56",
".git/index": "d1d32121ff7dc5cc410e9ca947b539ef",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "75369456ac010f48f82640cce4ae56b3",
"assets/AssetManifest.json": "c6b89482b27833bed3acaa89db1b9e73",
"assets/NOTICES": "1434654f4bfa34fac93b2936aa2f8605",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6463da2ea9fba2feeabd1115e69f77bd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "00e4b6b0dadc4e042f49ce51701e7503",
"assets/fonts/MaterialIcons-Regular.otf": "d08e364defb2ec1cdd3caf010073b643",
"assets/assets/app_icon.jpeg": "9efc381237767030e6ec7961c6bfd33f",
"assets/assets/images/logo_with_text.png": "6bf5448e2102b84116a3adc8af95c258",
"assets/assets/images/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/images/android_pwa.png": "5b1a40c874bf4a7ed59706b694423fbc",
"assets/assets/images/ios_pwa.png": "b5fdecb0620af2214fe2571a3ae825aa",
"assets/assets/icons/check_filled.svg": "881070c6c70ce1209ba965b16eb6c53e",
"assets/assets/icons/cross_red.svg": "b40fb2eda0e87371ea7bdfc707e3e906",
"assets/assets/icons/wallet.svg": "2983f7bfd3db4f0f3981c8000b4aaaec",
"assets/assets/icons/money_box.svg": "ae9a720932d5a0dd67472f73e143ca67",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"sw.js": "49936dfb5e30eb34d80bf38bd4e2e1c6",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
