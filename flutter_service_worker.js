'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cea315ee9ea02bb13b3041905448cd9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "1bf9e2e22aca9fb654cab66907476c11",
".git/refs/heads/main": "d4940d47a93221503289c81a72e84773",
".git/refs/remotes/origin/main": "d4940d47a93221503289c81a72e84773",
".git/config": "b6fcdb553765ae4505fa8d6937ee7259",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/main": "923e781265812dfab98813033ac80183",
".git/logs/refs/remotes/origin/main": "3d087e0a088d9e3cd7359dab1aa8902a",
".git/logs/HEAD": "8208c86fb748d2a5ba7a59d4696834fd",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/d19a476051bf0ab52845612a153d4119423db3": "213e028b3e6c96b8640ca30d299b8a9a",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/2e/585799fad12c0ef763f00e5ddb9dbb99833503": "0561327b6a576c9d6f4b3f869008de37",
".git/objects/a6/6223d5a75a0f9b152a4a8f7cf7cc62635542d3": "ceba39874a2a77134e09268d2a2bfdd4",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/51/55b17115df7949ba21110e25acde3507708fb3": "93216918defeba5dbadb8b200c19e762",
".git/objects/b8/539dc2adc9a733738364efd625459eed46e550": "dc074dd4ea29dd69c447417152938302",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/6d/a78c224d8f182d7a86d4bf0582989b8e7c81f3": "07c6e0fe7e52cc5c96068fc72a066abd",
".git/objects/91/fb1766e65f54aaecc0774eaf9ea2c35f73e0cb": "95bf2fad7180d3814bf04e82f6d96627",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/dd/334fe388efd31194f51d78c5995f2973a66c8a": "bef72740dd14e4a81d7f87220cbc7081",
".git/objects/55/4bc6da6ce059dcf948ea37e36b92f6a9640438": "a37b55a24b052f1c79ae3e12b8a496d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/3a/32e99bd609e91c19656390003807ec018bbf8f": "0bc299e800c8342014ade4b06ef165d5",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/b15efddd420ed814ace2914eb2dc4869d12970": "22a68ff47d9e725a2b709b7303bed46f",
".git/objects/74/318d1481e63395d9bfbe47b71517ae82db3936": "c73f02cf67fedd26b0b3bb29c46ab67f",
".git/objects/96/89da72309e1ecaa0cf2f3c8a6ee2771cf8c3db": "9adf4208f5135ffcdef07a9d58117430",
".git/objects/f2/905350141488a0c6f2ae59e5e08f1468cf12cf": "7525426026a1d891be84ae2b8a2da155",
".git/objects/f2/47d2ba23db15154c0171d519940d628421dccd": "f8fb4c05b56ebdfa255ba24484aaacdc",
".git/objects/21/7947382b9c28d6a718a729c3240d27391a1aef": "0c28010cf820a318acfffe032f393580",
".git/objects/21/88581a30e49c76dd518eb3a9edad431c20a37c": "0b327e23fc4732b4740bab8a47196177",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/8d/ab39d1deaadae51945e5ce38c4357ea771e2b1": "6c194144f5c4eb8a56f784ebac152a02",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/9d/123d821ad0652c92b152731db9db70af2f0aba": "2d76b18e0f9cd8ea849b1c410016db59",
".git/objects/d0/5c870a646719a4df4e094bb0258221414238b1": "32fcbc0a2c20617be88fb96a9419660a",
".git/objects/02/db992eaa28aee2a7477b3790452298d73ae6e8": "39e2c99ed27df5df288f5d943fc2589f",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e4/85a0bfb56c4b069e2d03e8eb83d4c5dec4549e": "e0f8ba7b5faccfb9950af5fc3e928360",
".git/objects/45/2acb02c468c95e11af95845e68ee09cde301d5": "7cf0fea82a57dec92f1e37ca6e6b3cf0",
".git/objects/b4/0c8e068e4ebff89e2c8b7af9b9794fd0576eac": "e32ec24eda2de8c4dd60427dda36e3b3",
".git/objects/7c/2164d72849e6f43819f2ed3828247fd2ef66ec": "803e25fc97656bdc6a59baf4692c95fe",
".git/objects/de/0f742af752afae0e46a17b7436fa43bd2c662d": "7b8fe6315eba6e3364ffd3028ea199b5",
".git/objects/de/ea64dba00b6021d47b5531721859f2f13d2bf3": "2cfcda349b67cc0283082c18a5e5199e",
".git/objects/77/761e094186b45f74c0002005236e7b523062a4": "b40151bd3c20ff1e2770c65ed5daf3e8",
".git/objects/01/d1fb321bdaa70207ac3c1bc820e17a792617a6": "1d3346cfd922cb518068d5187d287d1e",
".git/objects/68/6a5f810bfa501e061f333070cc588dfb10fd3c": "ccbeeebc38a9d793fdd8927c8ff92b7f",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/0f/c7815a2129150449328276f9b52b5eb4164f99": "68914ad9f12216ad34090c6b47226339",
".git/objects/42/8fc05e89aee86656bac6e28cf3b74c0ead23f3": "8e8e55c41ae0721402cc54ac7aaf1517",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/34/77af874d3105e19f81a380a2d9e44445ce7a57": "88bbba095f18c35bfca0e29bab3ec979",
".git/objects/d9/7b39b47fc5f7e5df75d791c72b68511c950d05": "663e82cbd61e6783209d75eb23c70ee4",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ed/43e7ae00b975fc73c7324266b1e2c80ec46a28": "7b0283e4ed5f085220b2239f523a99f1",
".git/objects/e2/c89715847c6c623de99aad146b7604d328ebf0": "e4d75580648db595475f597792df7146",
".git/objects/ea/15bbcea279e56e82711ca6ef0c023609d8061c": "bf2e43b8fe86c36f33d19fa39c3b37d4",
".git/objects/d5/4930f7819cc0d5fd2a0c21023dc155c4015631": "d4351d66af87b40dd15024fc03315855",
".git/objects/c9/279ff571f6160ac5bebf1d6e1ae010c84406be": "6915e8e7da5c8dd898cdd59e5300c9a3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/7f/ceba0f4fba4ac22f673c9fa7dfa50c31858699": "20a21047156f23b04a4114192ded1170",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/19/0d0b9ca62732d3550790f2649836fc85dc78cb": "abe843c14f6ecf53b0c8c93b17bed4b3",
".git/objects/80/d3146b5b3227315b835f3839f9d4633e5fbbc1": "43502d30dd50256cadee156bc146ddfe",
".git/objects/80/b3d6ab4c72bcdcaf52ef5990a6c3ed26293fdf": "3d083e0a74ed8a12bd44cc044a719a9e",
".git/objects/86/0eb9c35862d603aa6ecced6f63b3c0a0ece840": "59e831a377d16cbf132d9d3f31d850ec",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/3c/71cae6b5eadeee2eb89defc52defd999e1ae29": "3021f47cfd09b41545d6cc1ffe6c0645",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/12/229e379059520d2ae08226875f29fd507f3625": "75162e0e800bbe3e7a20a50e0c9138ed",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/49/f08fe77ee7e3bce4ad9f62b1e51ac53da44dc7": "496cd5ce7e0f20719c9c6eeaedd18c19",
".git/objects/5b/6ad1105ba7d07ed98b38f0e4005f7b9aca60a9": "1dfedd96bb3b4cddc65e6d8adfdf70a8",
".git/objects/5b/8359d35c67dcbb1b706b152fdac0176bfbf0e1": "41234b6f86f24a3a5e3ed3ea89401341",
".git/objects/db/78f122b849aa752e3eeed1de172844b548a43c": "d7e8953e1324fe260d8b6e263d3c4efa",
".git/objects/52/7318be12f30d445c87f56c8f5b78cd4832807f": "92731985f861efd715fdc8f615218adc",
".git/objects/52/861b8873371d9fa87b4a8b5443bc33120d33f0": "cb17ca7a771b7ea142b4bf3e0ee9e8d4",
".git/objects/0c/1d4535646df5f8edc87b45a60598e0b1692966": "147d7214c5c505356615897b52230e6c",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/192cd9b1d5d3455b3ec3e086b847c44701d513": "ab11bb96844c5bf105b73f6b752561cf",
".git/objects/41/0169cc379876c2b05480bce3dd1ca72680c11e": "9320ef6ff72b4aed42469932c8f88d93",
".git/objects/41/cecdb106c7f43f21fdeb6f2b7da2f5c71f4414": "05bdfdd3092c6340a55681d840dec8a0",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/0b/2c3d0353e0da9bce5919c3fbc332b0383fe069": "f9e50e8dd94f1b70562887e61a211be8",
".git/objects/09/0432ddae7cb324c8739289425721f7aea5e4f3": "404e967bcc761c1a611a1c3a6b753e0e",
".git/objects/a4/6fccd0355b717577f101fbc2bd803a5bfdcecb": "679670e2a3ddd3d643d6644ef813eadd",
".git/objects/64/8af5be1229a61ceb078f7e8158bc06e192859d": "a534a2c93400144daca267effbff336c",
".git/objects/a1/35e2ddf0d02d526794b3df8ce0982e63c50d5f": "e2a3fd5f3f4098a6824a2ddd77ccc7b7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/e475bc7c1ea71287f11f5f973c5f37c6eb171d": "4ecdbb9c9265723294e0397d5edac5f2",
".git/objects/e8/9b0b79a2910f0ac309a1845a9f733bcb568792": "7ad6d35ba087d81aa193a0d68c73e251",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/25/13a92730c00c721985354c175d3c36637a3a17": "bebe71db7b6e76638f128d911b9a1013",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/f6/667e019a1fd217f8723ec222726b2d30471afc": "f8de8a21be5141d2b8c936b0ed7ddb37",
".git/objects/f6/b9c18613d42db31e500fc8875ef933b8a1acba": "7ae5b3f52be808dce062709e033c7586",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/39/0ca748df4fbfa1b7c24cae73e6bf9d54fed15b": "1c51ef56a5fc921abcd7c184f3b4bba4",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/1f/6f0e463c07e1fb5967844a75c4f6b63e1cff61": "b58670b6d6e5f3885eac811870bd7c4c",
".git/objects/94/bb28ee050207ba2f56cadbf65cda58131b34ab": "ad8f0b0297afddfcfef2fd819840bbae",
".git/objects/73/3e2e5a03d6d24d27398493a5add61a9f530f42": "0a241e1e0b92e508944e37aa20c01ff5",
".git/objects/a5/09edf23999acaac98dc64718b7349e22f274cc": "7347db8eb7a5a815e3e154fe93ed69ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/1b4d0768da8c25dbc2ad4126cc84307272559d": "36c11adc2bf4b607fbfe64339bafb2fb",
".git/objects/8f/9111abafb78afeeb165acba85d87fe1fc01157": "32bd69811a423d5a850d91a74be425a9",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/cebf6d177677ca71208319fcc675184070b8ac": "efe8c309ec260ec33d9587b2861b3dac",
".git/objects/d7/140d08f01e1fc8353fa9cd0f351fcb1ad80f75": "d4079b5bd8f34739adb616b4bbade103",
".git/objects/63/0ec7a3243e355a4c65ed2ccffe70b8339ebfea": "4e10bbac700acf411c1f9532d75a53fb",
".git/objects/cf/d8401acf9f9d6d547cb5467824cfb09e2b5a91": "8384cafc7c4793d771e3ab9c86f7f50a",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/26/8d7a14289270f6b35026fbadc344184ad8922b": "291d4e603154a75bb0ba37733caca3aa",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
"img/app_icon.png": "1602fbf4b98813a0d02af6a412f4a63e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "238e474fdbba9ca3ba268e35d505df46",
"assets/assets/images/app_icon.png": "1602fbf4b98813a0d02af6a412f4a63e",
"assets/assets/images/app_icon_green.png": "1602fbf4b98813a0d02af6a412f4a63e",
"assets/assets/images/order.svg": "0cb0e5657b86ce01df54885589580fea",
"assets/assets/images/wifi_off.png": "8a905a754c36b8f058c2ff61b77edf6b",
"assets/assets/images/app_gray_icon.png": "2c9dad47258607114bf3610af8ab70e0",
"assets/assets/images/whatsapp.svg": "03ce470ee0154522418f97a9e025c62e",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/AssetManifest.json": "58160687881c4e87f95a0fad3d2017ad",
"assets/NOTICES": "6c1b889ceb981445883bdd703538aaa6",
"assets/packages/upi_pay/assets/apps/ios/money.bullet.png": "812cce1533198f8ec4fa32cb09943ee1",
"assets/packages/upi_pay/assets/apps/ios/com.google.paisa.png": "97c0f75dcd416077ff6526a5cb5aa57b",
"assets/packages/upi_pay/assets/apps/ios/com.one97.paytm.png": "25e1349a48e9578b9cecb12c9bfdc2da",
"assets/packages/upi_pay/assets/apps/ios/com.mobikwik.png": "7c3fa11767f31b276fe7eb784887da2a",
"assets/packages/upi_pay/assets/apps/ios/com.jkbank.bhimjkbankupi.png": "56c14edf2ae11d616cf69761a5b94307",
"assets/packages/upi_pay/assets/apps/ios/com.phonepe.PhonePeApp.png": "4963aa075c10d8fd14e193e74aba4e8c",
"assets/packages/upi_pay/assets/apps/ios/in.cointab.app.png": "aada1a5baf6c1bc986f81537132ed0b6",
"assets/packages/upi_pay/assets/apps/ios/com.upi.federalbank.org.lotza.png": "d73fd53043c8e6ebabe2ac4b6f3a25a0",
"assets/packages/upi_pay/assets/apps/ios/com.UBI.BHIMUPI.png": "0332a92e916e5a7912e23898e91c3830",
"assets/packages/upi_pay/assets/apps/ios/com.freecharge.ios.png": "d4ba535121579756a3c169815ee5bba0",
"assets/packages/upi_pay/assets/apps/ios/com.truesoftware.TrueCallerOther.png": "7dbd592745665412ac6ef27624cd79b6",
"assets/packages/upi_pay/assets/apps/ios/com.vijayabank.UPI.png": "29784581062e5939d0eb32f2b585bf8a",
"assets/packages/upi_pay/assets/apps/ios/kvb.app.upiapp.png": "0d78b8d30acd20332a14facf20de839a",
"assets/packages/upi_pay/assets/apps/ios/net.whatsapp.WhatsApp.png": "661d28c74ae9bace0ff86c20a0aea3e5",
"assets/packages/upi_pay/assets/apps/ios/com.ausmallfinancebank.aupay.bhimupi.png": "424f17213ad989bc14a2e2bdba992d75",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"main.dart.js": "c904785ee0a6b767c00d535fc1d9926d",
"version.json": "80e0ca12e6c5189fe2f6ef4d4f700fba",
"manifest.json": "2d3b659f06dc220312c5d680cb51f693",
"index.html": "e7debe11ba407f06ceebfde084e2e768",
"/": "e7debe11ba407f06ceebfde084e2e768",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
