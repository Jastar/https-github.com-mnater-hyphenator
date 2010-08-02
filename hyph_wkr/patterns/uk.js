﻿// For questions about the Ukrainian hyphenation patterns
// ask Alexey Grekov (athens at ukr dot net)
Hyphenator_worker.languages['uk'] = {
	leftmin : 2,
	rightmin : 2,
	shortestPattern : 1,
	longestPattern : 12,
	specialChars : "аеіоуюяєїибкпстфхцчшщвгджзлмнрй’ґь",
	patterns : {
		2 : "6’6ь",
		3 : "2а1а3аа3еа3іа3оа3уа3юа3яа3єа3ї2е1е3ае3ее3іе3ое3уе3юе3яе3єе3ї2и1и3аи3еи3іи3ои3уи3юи3яи3єи3ї2і1і3аі3еі3иі3оі3уі3юі3яі3єі3ї2о1о3ао3ео3іо3оо3уо3юо3яо3єо3ї2у1у3ау3еу3іу3оу3уу3юу3яу3єу3ї2ю1ю3аю3ею3ію3ою3ую3юю3яю3єю3ї2я1я3ая3ея3оя3уя3юя3яя3єя3ї2є1є3ує3ює3єє3ї2ї1ї3еї3ої3юд4жд4за2йе2йи2йі2йо2йу2йю2йя2йє2йї2йь6о",
		4 : "2б1к2б1п2б1с2б1т2б1ф2б1х2б1ц2б1ч2б1ш2б1щ2в1б2в1г2в1д2в1ж2в1з2в1к2в1л2в1м2в1н2в1п2в1р2в1с2в1т2в1ф2в1х2в1ц2в1ч2в1ш2в1щ2в1й2в’32г1к2г1п2г1с2г1т2г1ф2г1ц2г1ч2г1ш2д1к2д1п2д1с2д1т2д1ф2д1х2д1ц2д1ч2д1ш2д1щ2ж1к2ж1п2ж1с2ж1т2ж1ф2ж1х2ж1ц2ж1ч2ж1ш2з1к2з1п2з1с2з1т2з1ф2з1х2з1ц2з1ч2з1ш2з1щ2к1б2к1г2к1д2к1з2л1б2л1в2л1г2л1ґ2л1д2л1ж2л1з2л1к2л1м2л1н2л1п2л1р2л1с2л1т2л1ф2л1х2л1ц2л1ч2м1б2м1в2м1г2м1д2м1ж2м1з2м1к2м1л2м1н2м1п2м1р2м1с2м1т2м1ф2м1х2м1ц2м1ч2м1ш2м1щ2м’32н1б2н1в2н1г2н1д2н1ж2н1з2н1к2н1л2н1м2н1п2н1р2н1с2н1т2н1ф2н1х2н1ц2н1ч2н1ш2н1щ2н’32п1б2п1д2п1з2р1б2р1в2р1г2р1ґ2р1д2р1ж2р1з2р1к2р1л2р1м2р1н2р1п2р1с2р1т2р1ф2р1х2р1ц2р1ч2р1ш2р1щ2р1й2р’32с1б2с1г2с1д2т1б2т1г2т1д2т1ж2т1з2ф1б2ф1г2ф1з2х1г2х1д2ц1б2ц1г2ц1д2ц1з2ч1б2ч1д2ч1ж2ш1б2ш1г2й1б2й1в2й1г2й1д2й1ж2й1з2й1к2й1л2й1м2й1н2й1п2й1р2й1с2й1т2й1ф2й1х2й1ц2й1ч2й1ш2й1щ2б1б2в1в2г1г2ґ1ґ2д1д2ж1ж2з1з2к1к2л1л2м1м2н1н2п1п2р1р2с1с2т1т2ф1ф2х1х2ц1ц2ч1ч2ш1ш2щ1щ2й1й3ння3ття3ттю3лля3ллє3ллю3ддя3й6о_б’8_в’8_д’8_з’8_м’8_н’8_п’8_р’8_т’8_ф’8_ш’8_бд6_бр6_вб6_вг6_вд6_вж6_вз6_вк6_вл6_вм6_вп6_вс6_вт6_дж6_дз6_дл6_дс6_зб6_зг6_зд6_зл6_зс6_зч6_зш6_зґ6_йш6_кл6_кп6_кс6_кх6_кш6_лс6_ль6_мс6_мф6_нб6_пр6_пс6_пх6_рт6_ск6_сл6_сп6_ст6_сх6_тк6_тр6_тх6_ть6_фл6_хл6_ць6_чх6_шк6_шл6_шп6_шт66бв_6бз_6бй_6бл_6бн_6бр_6бс_6вб_6вв_6вд_6вж_6вз_6вй_6вк_6вл_6вм_6вн_6вп_6вр_6вс_6вт_6вх_6вч_6вш_6вщ_6гв_6гг_6гд_6гл_6гм_6гн_6гр_6гс_6гт_6дж_6дз_6дл_6дм_6дн_6др_6дт_6дь_6жб_6жв_6зв_6зг_6зд_6зк_6зл_6зм_6зн_6зр_6зь_6йб_6йв_6йг_6йд_6йз_6йк_6йл_6йм_6йн_6йп_6йр_6йс_6йт_6йф_6йх_6йц_6йч_6йш_6кв_6кк_6кл_6кр_6кс_6кт_6кх_6кш_6лб_6лг_6лд_6лк_6лл_6лм_6лн_6лп_6лс_6лт_6ль_6мб_6мг_6мж_6мк_6мл_6мм_6мн_6мп_6мр_6мс_6мт_6мф_6мх_6мш_6нв_6нг_6нд_6нж_6нз_6нк_6нм_6нн_6нр_6нс_6нт_6нф_6нх_6нц_6нч_6нш_6нь_6пд_6пл_6пр_6пс_6пт_6пф_6пц_6рб_6рв_6рг_6рд_6рж_6рз_6рк_6рл_6рм_6рн_6рп_6рр_6рс_6рт_6рф_6рх_6рц_6рч_6рш_6рщ_6рь_6ск_6сл_6см_6сн_6сп_6сс_6ст_6сь_6тв_6тл_6тм_6тр_6тс_6тт_6тц_6тч_6ть_6фм_6фр_6фт_6фф_6фь_6хв_6хм_6хн_6хр_6хт_6хш_6ць_6чб_6чм_6чн_6чт_6шв_6шм_6шн_6шт_виї4оо4боб’3од’3’ї4в’ї4з’ї4д’ї4ж’ї4л’ї4м’ї4с’ї4хге4ооо4куя4вді4омі4оі4онзо6ооу4с",
		5 : "2дь1к2дь1с2дь1т2дь1ц2зь1к2зь1с2зь1т2ль1б2ль1в2ль1г2ль1д2ль1ж2ль1з2ль1к2ль1м2ль1н2ль1п2ль1р2ль1с2ль1т2ль1ф2ль1х2ль1ц2ль1ч2ль1ш2ль1щ2ль1й2нь1б2нь1г2нь1з2нь1к2нь1л2нь1м2нь1с2нь1т2нь1х2нь1ц2нь1ч2нь1ш2нь1й2рь1к2рь1ц2сь1б2сь1д2ть1б2к1сп2к1ст2п1сп2п1ст2с1пк2с1пп2с1пс2с1пт2с1пх2с1пч2с1тк2с1тп2с1тс2с1тт2с1тф2с1тц2с1шт2т1ск2т1сп2т1ст2т1шк2ф1сп2ф1ст2ф1шт2х1ст2ц1ст2ц1шк2ш1тк3п4ре3п4риприї43п4ро3п4ріооб’3ооб3мнао4рнеу4к3блаж3ближ3близ3блок3бран3бруд3глад3глиб3глин3глоб3глуз3глуш3гляд3глян3гнан3гнил3гноз3грав3град3грай3грам3гран3граф3граш3граю3грає3грес3гроб3грож3гроз3груп3грів3гріт3гріш3д4ан3двиг3двою3двоє3двій3двір3драж3дром3друж3друк3дряп3дріб3жвав3зваж3зван3звед3звел3звич3звищ3звук3звуч3звіт3змін3зйом3зміш3знав3знай3знак3знал3знан3знат3знач3знаю3знає3зниж3знім3зрюв3зрів3зріл3зрін3й4ма3с4пі3х4то3ї4зд3ї4ставі4абі4о3дої4ддої4мдої4хдої4жзаї4дзаї4жзаї4ззаї4лзаї4мзаї4хзо4казо4кезо4кизо4кузо4кіий4тиій4тинаї4жнаї4знаї4лнаї4мнаї4снаї4хпоя4в_пої4пої4дпрої4сеї4ду4к4рвия4вз’я4взая4вная4веті4одея4као4хаео4ханія4кдоу4кдоу4мнею4ннея4кое4копоя4соа4ктеа4ктий4няпій4мвий4мзай4моа4на",
		6 : "2к1ськ2п1ськ2с1ськ2с1тсь2сь1кк2сь1кс2сь1кт2т1ськ2ф1ськ2х1ськ2ш1тсь_вб6’6_вв6’6_вз6д6_вм6’6_вп6’6_вп6х6_вс6т6_вш6к6_зв6’6_зд6з6_зм6’6_зс6к6_зс6т6_зш6к6_лк6с6_ск6л6_сп6’6_сп6л6_сп6х6_сх6л66б6ль_6б6ст_6б6ць_6в6др_6в6дь_6в6зь_6в6ль_6в6сь_6в6ць_6г6ль_6г6сь_6д6зь_6ж6дь_6ж6сь_6з6дв_6з6дн_6з6дь_6з6нь_6з6сь_6з6ьб_6з6ьк_6й6кл_6й6ль_6й6мс_6й6нс_6й6ст_6й6сь_6й6тс_6к6ль_6к6ст_6к6сь_6к6тр_6л6ль_6л6мс_6л6хв_6л6ьб_6л6ьв_6л6ьг_6л6ьд_6л6ьз_6л6ьк_6л6ьм_6л6ьн_6л6ьп_6л6ьс_6л6ьт_6л6ьф_6л6ьх_6л6ьц_6л6ьч_6л6ьш_6л6ьщ_6м6бр_6м6ль_6м6сь_6н6гл_6н6гр_6н6гс_6н6дж_6н6дз_6н6дп_6н6др_6н6кс_6н6кт_6н6ск_6н6ст_6н6тк_6н6тр_6н6ть_6н6ць_6н6ьб_6н6ьг_6н6ьк_6п6сь_6п6тр_6р6дв_6р6дж_6р6дь_6р6зн_6р6зь_6р6кс_6р6кт_6р6ль_6р6нс_6р6нь_6р6ср_6р6ст_6р6сь_6р6тв_6р6тр_6р6ть_6р6ць_6с6дп_6с6ль_6с6тв_6с6тй_6с6тм_6с6тр_6с6ть_6с6ць_6с6ьб_6с6ьк_6с6ьм_6т6вт_6т6зт_6т6ль_6т6мр_6ф6ть_6ц6тв_6ц6ьк_6ш6ль_6ш6нл_6ш6сь_6ш6тв_6щ6сь__бе4з3_безу4віду4ч_ві4д3_від’3_мі4ж3ові4д3_пере3_під’3_пі4д3_пі4в3_ро4з3ооб3рона4д’3за5о4рдо5о4рпо5о4рз3в’4яза3ю4шу3в’4яз3м’4яу3м’4яв3м’4язу4рочприо4р3й4ш4л3блиск3блоці3брати3брест3бризк3в4бив3в4дал3в4лад3в4лов3в4сюд3в4тіл3гнучк3грати3грець3грунт3д4бав3д4бал3д4бан3д4бат3д4бає3двічі3дріма3жміть3жріть3з4був3з4бут3звест3звись3з4год3з4дат3з4чеп3й4мищ3й4му_3й4шов3м4нож3м4щен3п4сов3п4сон3п4сув3р4вав3с4кид3с4кок3с4коп3с4кор3с4коч3с4пад3с4пин3с4піш3с4тав3с4тад3с4таз3с4тал3с4тан3с4тар3с4тат3с4тач3с4тає3с4теп3с4тиг3с4тиж3с4той3с4тою3с4туп3с4тяг3с4тіб3с4тій3с4тір3с4фер3с4хил3с4хов3с4хід3т4кан3ш4код3ш4кол3ш4кіл3ш4кір3ш4таб3ш4туч3ґрунт3е4тап3о4бід3о4біц3о4дяг3о4соб3о4хоч3о4чищ3у4ваг3у4важ3у4гав3у4мит3у4міл3у4ряд3я4зик3я4кіс3я4рус3є4д3н3є4дин3є4рей3ї4ждж3ї4хав3ї4хат_заї4к_заї4ц_заї4ч_наї4давої4дае4тилахої4дауді4обе5конб’4єтьбран4дви3й4дви3й4т3в’4яз4д7земді3й4тді3й4д_дої4в_дої4лдої4стеу4стрео4свіек2с1кек2с1пек2с1тек2с1цигої4діе4тилйо4свіквої4д3м’4ятна3з4внаї4вснаї4вшна4й3ана4й3енедої4неї4стоної4доо4палео4палонаї4доо4свіоу4строа4томпоч4непоч4нипоч4нупої4здраді4оз’4єднрмої4дсор4тнцук3роубої4дясої4дви3у4чза3у4чна3у4чне3у4чгелі4ополі4осоці4офізі4охімі4огоме4оао4пікка5налоі4золмете4оабия4квия4сннея4снпоя4сннеа4биео4ціноо4цінео4бурео4зорпіво4спале4оао4хотео4хотео4щадао4щадоо4чищоо4бігоу4суноу4комз3а4ктеу4богзай4нянай4няприй4мдій4манай4маобой4мпрой4мобій4моу4годау4годеу4годео4писоо4писао4пис_ом4рі_ум4ри_ум4рі_ум4ру_ум4ревиу4ди",
		7 : "_бе4з’3_ві5д4а_ві5д4іневі4д3_пі5д4о_пі5д4і_пі5д4е_пі5д4и_пі5д4у_спі4в3_ро5з4і_ро5з4е_ро5з4а_ро4з’3до3в’4єза3в’4єзі3в’4єпо3в’4єуі3в’4єпо3в’4яза3в’4язі3в’4яна3в’4яоб3в’4язі3м’4яно3м’4яза3м’4яна3м’4яоб3м’4япо3м’4ясу3м’4ядо3в’4юза3в’4юзі3в’4юна3в’4юпо3в’4юуі3в’4юза3я4локоу4рочпоу4роч3м4к4не3м4к4ну3м4к4ні3с4к4ле3с4к4ло3британ3в4довз3в4ласн3в4лашт3в4певн3громад3груван3г4ідро3з4бага3зворуш3з4довж3знаход3зрозум3й4менн3й4муть3й4міть3м4ріть3р4вати3р4віть3с4кіль3с4кіпл3с4пект3с4перм3с4піть3с4тайн3с4тара3с4тисл3с4титу3с4товб3с4тосо3с4тосу3с4тоян3с4тіль3ш4кідл3а4гент3а4грес3а4зарт3а4ктив3а4куст3а4кциз3а4птеч3а4соці3а4тлет3а4халі3е4моці3е4мігр3е4нерг3е4стет3о4бира3о4даль3о4збро3о4крем3о4плат3о4птим3о4пуст3о4пуше3о4пуще3о4ренд3о4сяжн3о4холо3о4чисн3у4згод3у4клад3у4рбан3у4спіш3у4твор3я4дерн3є4писк3і4снув_бе5зе_бйор4нсвер4х3нвід7знаві5д4енві5д4омво4с5ко_дої5ль3з’4ясозна3й4дзна3й4ткорої4д3м’4якшна3в4чанео4палобі3й4добі3й4тпереї4дпереї4жпереї4зпереї4лпереї4спереї4хпре4й4спо3д4вопри3й4тпро4ф3спор4т3нпри3й4дроз5винроз5витро5з4умспе4цпрспе4ц3ссь4квугтран4с3під3у4чво4єводво4єначді4алогді4огенпроя4снрозо4рарозо4рерозо4рннапоу4мне4олітне4ологне4онацне4офітнея4рок_пе4ом_д3у4сімроз’я4рте4ологте4ософа3у4даро3у4дарз3у4дарв3у4дареі4стотоі4стотоо4чистнайа4ктпіва4ктао4бразео4бразоо4бразиа4варіяа4варіоа4варіеа4варіаа4дресеа4дресоа4дресіа4дресае4фектее4фектое4фектое4місіие4місіяе4місіее4місій3у4богздій4няобій4няд4о3й4мперей4мбезу4глоа4каціоо4держбіблі4о_на3в4ч_ви3в4ч_до3в4ч_за3в4ч_по3в4чана3в4чена3в4чови3в4чеви3в4чедо3в4чоза3в4чпо3в4чае3м4рій_ви3м4р_за3м4р_зі3м4р_на3м4р_по3м4рие4стетое4стетее4стетоо4ктаніо4ктано3в4казе3в4каз",
		8 : "6б6с6тв_6б6с6тр_6б6с6ьк_6в6с6тв_6в6с6ть_6в6с6ьк_6г6с6тв_6д6с6тв_6д6с6ьк_6д6ь6сь_6й6с6тв_6й6с6тр_6й6с6ьк_6л6ь6дс_6л6ь6сь_6л6ь6тр_6м6б6ль_6м6с6тв_6м6с6ьк_6н6г6ль_6н6с6тв_6н6с6тр_6н6с6ьк_6н6ь6сь_6п6с6тв_6р6л6ьз_6р6н6ст_6р6с6тв_6р6с6ть_6р6с6ьк_6р6щ6сь_6с6д6рп_6с6т6рь_6т6с6тв_6т6с6ьк_6т6ь6сь_6ф6с6тв__ві5д4ом_ві5д4ун_ві5д4ербезві4д3неві4д’3_пона4д3_напі4в3ро5з4йом_чере4з3пере5о4рпі6д5о4робі3в’4євід3в’4япри3в’4япід3в’4япри3м’4янаду4рочприу4роч3в4б4лаг3в4к4лад3в4п4лив3в4т4рут3в4т4руч3з4б4рой3з4б4рою3з4б4роє3з4в4’яз3п4с4ков3с4к4лад3с4к4лит3с4п4лав3с4п4лат3с4п4лач3с4п4рав3с4т4вор3с4т4рах3с4т4риб3с4т4риж3с4т4рой3с4т4рок3с4т4ром3с4т4роф3с4т4роч3с4т4рою3с4т4роя3с4т4роє3с4т4рої3с4т4рій3с4т4ріл3с4т4річ3т4к4нен3т4ь4мар3у4п4рав3в4веден3в4довол3в4живан3в4поряд3в4рожай3з4доров3з4дійсн3с4короч3с4повід3с4пожив3с4табіл3с4тереж3с4теріг3с4торон3с4торін3а4дитив3а4ктуал3а4курат3а4кцепт3а4лергі3а4матор3а4наліз3а4натом3а4парат3а4пеляц3а4ромат3а4спект3е4колог3е4коном3е4лектр3о4б’єдн3о4б’єкт3о4береж3о4борон3о4перат3о4хорон3у4компл3у4крупн3у4перед3у4рядов3у4стпіш3у4тробн3я4скрав3і4зотоп3і4люстр3і4мовір3і4нтенс3і4нформальбі5онбей4сболбо4г3данбо4є3голбо4є3готбо4є3запбори4с5пвина3й4двина3й4тві5д4е4оджен4тльди4с3локди4с3пледи4с3путди4с3тилд4ні3п4рдо3з4волдо3з4вілкон4трремо4к5рийна3б4лизна3в4рядна4д7з4вна3в4ченне3в4томне3д4банна3д4банне3з4вичне3з4важна5п4ливні4т5ратоб5у4мовпере3й4дпере3й4тпі5в4еньпо3в4торпо3в4ченпо3д4робпо3д4разпо5з4бавпри4нципрай3в4нороз5вантро4з5ділро4з5горро4з5верро4з5чепро4з3ливсан4к4т3серцеї4дстат5упрукр3а4втукр3а4грукр3е4кснедо3у4чпед3у4чипере3у4чсамо3у4чсво4єчассво4єрідоо4динокміжу4собнай3я4снроз’я4снро5з4ориро5з4ороро5з4оруро5з4оряро5з4орюро5з4орірозо4решео4голошбальне4оне4окласпі5в4оніп4о5берео3о4кисли3о4кисле3о4кислх3о4кисли3і4сторо3і4сторі3і4стора3і4сторя3і4сторе3і4сторар4т3мінар4т3підар4т3ринар4т3хімперей4няпідій4нябезу4пин_при3в4чмона3в4чжона3в4чіона3в4ч_зав3м4р_при3м4р_роз3м4рй3е4стет",
		9 : "6л6ь6ств_6л6ь6ськ_6н6с6ькй_6н6т6ств__бе5з4о3д_безві4д3_ві5д4озвді4єві4д3за4вві4д3співві4д3_пере4д3г_пере4д3д_пере4д3м_пере4д3р_пере4д3ч_пере4д’3_пона5д4і_пона5д4и_пона5д4я_чере4з’3непо3в’4япере3м’4япіді3м’4япозау4роч3в4п4равн3с4к4рипт3с4п4ритн3с4п4рият3с4п4ромо3с4т4ражд3с4т4рукт3с4т4рукц3т4ь4мяні3в4разлив3з4баланс3й4мовірн3с4постер3а4вторит3а4декват3а4постол3а4ргумен3е4легант3е4лемент3е4стакад3о4рдинац3у4люблен3у4разлив3у4рочист3у4станов3у4сувати3і4ніціатай4с3бергбактері4оба4с3енербез5і4менбо4є3здатбо4є3компбо4є3постбо4є3прип4в3антрацге2ть3мандер4ж5виддер4ж5думдер4ж5комдер4ж3бездер4ж5стрдисбалансди4с3гармди4с3квалди4с3комфди4с3контди4с3кредди4с3кретди4с3крецди4с3кримди4с3кусіди4с3кутуди4с3персди4с3петчди4с3плейди4с3позиди4с3пропди4с3трибди4с3трофєв4р3атомєпі4с5копєпи4с5копза4п3часті4л3е4тилкиї4венермі4н5е4кона4й3маслна4й3сприна4й3якісна3в4чітьобі3д4раноб4лдер4жперег4нійпере4д5смпід5о4динпо3б4лизупо3в4чітьпо5ж4нітьпос4т3каппос4т3компос4т3натпос4т3соцпор4т3ретпор4т3фелпро4ект3нпро3б4лемпро4м3майпр4о5платро4з5д4вороз5у4ченроз5і4менро4з’5єднро4з3громспе4ц3курспе4ц3мон3с4проможтур4к3менро5з4ора_ро5з4орахне4омальтне4окомунне4оландшне4оліберно4к3а4утте4одолітпів3о4валнаді4сторар4т3афішар4т3кафеар4т3майсар4т3мейсар4т3фактнаді4стотнайі4стотау4т3еколбеза4варібезе4місіо3а4налізц3а4налізз3а4налізм3а4налізпів3у4годроз3у4год_віді3м4р_пере3м4рво4станнєоо4плачувео4плачув",
		10 : "_без5о4соб_без3ро4з3те4х3ві4д3_пере4д3св_пере4д3фрбе4з5і4дейінтер3в’4юна4й3у4бог3в4р4одливба4с3антравід5о4бражвід5о4бразводо5с4токводо5з4бірго4с4п5роздер4ж5а4дмдер4ж5бюдждер4ж5нафтдер4ж5реєсдер4ж5служдвох4а5томди4с3паритди4с3функцкон4тр3аргмі4н5е4нерна4й7о4берна4й7о4гидна4й7о4голна4й7о4пукна4й7о4хайпере5п4ливпере3в4томпів5о4с4трпос4т3процпос4т3фіксспор4т3вирспор4т3залспор4т3комспор4т3майтор4г3предсво4єкорисро5з4о5рамро6з5о4ри_ень7о4кислнай3і4сторпів3і4сторар4т3взводар4т3медіаар4т3о4динар4т3о4збрар4т3центргіпер3а4ктнай3о4бразар4т3мейстго4ф3мейстдо4к3мейстхо4р3мейстміж3а4варінад3а4варібез3а4дреснай3е4фектбло4к3пост_блі4ц3ана_блі4ц3турнт3а4налізре3а4налізбо4р4т3мехбо4р4т3пробо4р4т3радпан3е4стетпар3е4стет",
		11 : "про4ф3ві4д3спе4ц3ві4д3_пере4д3бач_пере4д3виб_пере4д3ост_пере4д3пла_пере4д3пок_пере4д3усібрі4дж3портволь4т3метргі4д5ро5метдер4ж5а4томдер4ж5замовзе4кономитиказа4х3станквар4т3платжко4м5а4томкому4ненергна4й3обережна4й7о4грядоб4л3а4дмінперед5о4бідперед5у4мовпо4с4т5комупо4с4т3декрпо4с4т3радіпо4с4т5соціпро3с4тирадполі4т5еконро4з5міннийруко5с4тискспор4т3клубспор4т4с3мечорно3б4ривхво4є3г4ризпа4н3о4тецьконтр3у4дарпост3і4сторар4т3десантар4т3о4бстрар4т3у4станграф3о4бразгро4с3мейсткра4н3мейстшта4л3мейстєге4р3мейстпост3а4варі_блі4ц3криг_блі4ц3опит_блі4ц3торгбак3а4налізген3а4налізміж3а4налізгос4п3у4годбо4р4т3і4нжнай3о4станнперед3о4пла",
		12 : "_пере4д3умовволь4т3ампердер4ж3резервдорого5в4казінфор4м3агенпо4с4т5радянпо4с4тприватукр3і4н4банкперед3і4сторсупер3о4бразбаге4р3мейстбале4т3мейстбран4д3мейстполі4ц3мейстпо4ш4т3мейстшапі4т3мейстнапів3а4варіперед3а4варісупер3а4варісупер3е4фектгіпер3е4місіполі3а4налізбо4р4т3о4пер",
		13 : "по4с4т3контрацен4т4р3енергва4ль4д3мействе4ль4т3мейстдекре4т3мейсткапе4ль3мейст_блі4ц3і4спитперед3о4станн",
		14 : "енерго3з4береженерго3з4берігкварти4р3мейстфо4р4с4т3мейст",
		15 : "по4с4т3менопаузконце4р4т3мейст"
	}
};