export const getCity = () : string => {
    return cities[Math.floor(Math.random() * cities.length-1)+1]
}

const cities = `
Tokyo
Delhi
Shanghai
Dhaka
Sao Paulo
Mexico City
Cairo
Beijing
Mumbai
Osaka
Chongqing
Karachi
Istanbul
Kinshasa
Lagos
Buenos Aires
Kolkata
Manila
Tianjin
Guangzhou
Rio de Janeiro
Lahore
Bangalore
Shenzhen
Moscow
Chennai
Bogota
Paris
Jakarta
Lima
Bangkok
Hyderabad
Seoul
Nagoya
London
Chengdu
Nanjing
Tehran
Ho Chi Minh City
Luanda
New York City
Wuhan
Xi-an Shaanxi
Ahmedabad
Kuala Lumpur
Hangzhou
Surat
Suzhou
Hong Kong
Riyadh
Shenyang
Baghdad
Dongguan
Foshan
Dar es Salaam
Pune
Santiago
Madrid
Haerbin
Toronto
Belo Horizonte
Khartoum
Johannesburg
Singapore
Dalian
Qingdao
Zhengzhou
Ji-nan Shandong
Barcelona
Saint Petersburg
Abidjan
Yangon
Fukuoka
Alexandria
Guadalajara
Ankara
Chittagong
Addis Ababa
Melbourne
Nairobi
Hanoi
Sydney
Monterrey
Changsha
Brasilia
Cape Town
Jiddah
Urumqi
Kunming
Changchun
Hefei
Shantou
Xinbei
Kabul
Ningbo
Tel Aviv
Yaounde
Rome
Shijiazhuang
Montreal
Recife
Kano
Porto Alegre
Fortaleza
Jaipur
Nanning
Medellin
Taiyuan Shanxi
Ekurhuleni
Douala
Kozhikode
Salvador
Los Angeles
Changzhou
Xiamen
Lucknow
Fuzhou Fujian
Casablanca
Wenzhou
Nanchang
Malappuram
Curitiba
Ibadan
Antananarivo
Tangshan Hebei
Abuja
Kampala
Kumasi
Faisalabad
Bekasi
Berlin
Guiyang
Busan
Santo Domingo
Asuncion
Campinas
Wuxi
Thrissur
Dakar
Port Harcourt
Mashhad
Kochi
Puebla
Kuwait City
Lanzhou
Indore
Durban
Kanpur
Sanaa
Athens
Milan
Pyongyang
Guayaquil
Izmir
Ouagadougou
Lusaka
Guatemala City
Kiev
Surabaya
Nagpur
Lisbon
Zhongshan
Dubai
Caracas
Depok
Shizuoka
Coimbatore
Handan
Port-au-Prince
Huaian
Algiers
Cali
Weifang
Incheon
Bamako
Goiania
Thiruvananthapuram
Manchester
Mbuji-Mayi
Chicago
Taipei
Pretoria
Zibo
Shaoxing
Lubumbashi
Yantai
Huizhou
Sapporo
Birmingham
Bandung
Vancouver
Accra
Toluca de Lerdo
Tashkent
Brazzaville
Luoyang
Patna
Bhopal
Damascus
Mogadishu
Brisbane
Tangerang
San Juan
Tunis
Beirut
Nantong
Medan
Baku
Belem
Gujranwala
Houston
Peshawar
Manaus
Sendai
Maracaibo
Rawalpindi
Barranquilla
Agra
Hohhot
Taoyuan
Baotou
Kannur
Liuzhou
Visakhapatnam
Vadodara
Xuzhou
Tijuana
Esfahan
Phnom Penh
Amman
Daegu
Naples
Nashik
Vijayawada
Havana
Grande Vitoria
Mecca
Brussels
Multan
Aleppo
Putian
Perth
Yangzhou
Hiroshima
Baoding
Bursa
Taizhou Zhejiang
Minsk
Conakry
Wuhu Anhui
Linyi Shandong
Kollam
Rajkot
Haikou
Vienna
Valencia
Almaty
Daqing
Yancheng Jiangsu
Panama City
Semarang
Lianyungang
Rabat
Baixada Santista
Quito
Hyderabad
Lome
Ludhiana
West Yorkshire
Davao City
La Paz
Leon de los Aldamas
Zhuhai
Benin City
Datong
Quanzhou
Adana
Madurai
Turin
Matola
Warsaw
Hamburg
Can Tho
Sharjah
Bucharest
Palembang
Santa Cruz
Budapest
Gaziantep
Montevideo
Meerut
Raipur
Lyon
Jiangmen
Mosul
Cixi
La Laguna
Varanasi
Xiangyang
Shiraz
Glasgow
Novosibirsk
Batam
Stockholm
Yinchuan
Anshan
Jamshedpur
Yichang
Srinagar
Auckland
Jilin
Ulaanbaatar
Tabriz
Makassar
Aurangabad
Phoenix
Qinhuangdao
Xining
Muscat
Monrovia
Marseille
Tiruppur
Philadelphia
Hengyang
Calgary
Qiqihaer
Cordoba
Suqian
Kananga
Karaj
Anyang
Rosario
Daejon
Munich
Ciudad Juarez
Harare
Onitsha
Jodhpur
Gaoxiong
Medina
Jining Shandong
Abu Dhabi
N-Djamena
Tegucigalpa
Gwangju
Yekaterinburg
Kathmandu
Edmonton
Natal
Grande Sao Luis
Ranchi
Zhangjiakou
Mandalay
Jabalpur
Huainan
Asansol
Kota
Chaozhou
San Antonio
Gwalior
San Jose
Allahabad
Yiwu
Chon Buri
Nouakchott
Amritsar
Kharkiv
Ottawa
Zurich
Taizhou Jiangsu
Basra
Joao Pessoa
Ganzhou
Belgrade
San Diego
Homs
Taian Shandong
Weihai
Queretaro
Mombasa
Niamey
Konya
Hai Phong
Jiaxing
Copenhagen
Cochabamba
Dhanbad
Kisangani
Bucaramanga
Kaifeng
Adelaide
Taizhong
Rizhao
Maceio
Suweon
Dongying
Zunyi
Zhanjiang
Samut Prakan
Nanchong
Joinville
Qom
Helsinki
Mianyang Sichuan
Dallas
Liuan
Porto
Antalya
Shiyan
Prague
Bareilly
Liuyang
Ad-Dammam
Fushun Liaoning
Pointe-Noire
Yingkou
Sofia
Kazan
Tengzhou
Port Elizabeth
Aligarh
Ahvaz
Florianopolis
Tanger
Freetown
Maoming
Pekan Baru
Fes
Moradabad
Suzhou
Uyo
Mysore
Dublin
San Luis Potosi
Astana
Nizhniy Novgorod
Ruian
Mwanza
Durg-Bhilainagar
Barquisimeto
Jieyang
Chelyabinsk
Zhuzhou
Baoji
Maracay
Bhubaneswar
Pingdingshan Henan
Zhenjiang Jiangsu
Chifeng
Puning
Lilongwe
Jinhua
Mendoza
Kigali
Bogor
Huaibei
Merida
Tiruchirappalli
Islamabad
Chiang Mai
Nanyang Henan
Xiangtan Hunan
Benxi
Jinzhou
Chandigarh
Bukavu
Abomey-Calavi
Da Nang
Liupanshui
Omsk
Nnewi
Tripoli
Guilin
Amsterdam
Tasikmalaya
Haifa
Binzhou
Pizhou
Quetta
Mexicali
Krasnoyarsk
Hubli-Dharwad
Kaduna
Samara
Guwahati
Aba
Luohe
Salem
Aguascalientes
Ufa
Bujumbura
Maputo
Bandar Lampung
Rostov-on-Don
Cologne
Yueqing
Saharanpur
Shimkent
Yongin
Xinxiang
Bazhong
Xiongan
Zaozhuang
San Salvador
Cuernavaca
Wenling
Panjin
Chihuahua
Jalandhar
Goyang
Fuyang
Yerevan
Siliguri
Managua
Ma'anshan
Bishkek
Shangrao
Tbilisi
Hargeysa
Cartagena
Diyarbakir
Perm
Bien Hoa
Zhaoqing
Voronezh
Bobo-Dioulasso
Lille
Jingzhou Hubei
Samarinda
Oslo
Kermanshah
Fuzhou Jiangxi
Johor Bahru
Leshan
Solapur
Changwon
Mersin
Antwerp
Kirkuk
Dezhou
Toulouse
Chenzhou
Aden
Aracaju
Huzhou
Ikorodu
Teresina
Sekondi Takoradi
Asmara
Yueyang
Xuchang
Marrakech
Tampico
Denpasar
Yichun Jiangxi
San Jose
Tshikapa
Changshu
Saltillo
Padang
Rotterdam
San Miguel de Tucuman
Nyala
Cebu City
Qujing
Odesa
Warangal
Acapulco de Juarez
Ilorin
Valparaiso
Kayseri
Cancun
Volgograd
Austin
Xintai
Blantyre-Limbe
Songkhla
Bordeaux
Krasnodar
Nonthaburi
Guiping
Jixi Heilongjiang
Pingxiang Jiangxi
Jacksonville
Morelia
Dehradun
Hamah
Dushanbe
Laiwu
Agadir
Jiujiang
Zhucheng
Mudanjiang
Chengde
Jerusalem
San Pedro Sula
Fort Worth
Misratah
Cucuta
Khulna
Ciudad Guayana
Arequipa
Dnipro
Nice
Owerri
Zamboanga City
Southampton
Guigang
Warri
Veracruz
Jos
Rajshahi
Seongnam
Leiyang
Pathum Thani
Yangjiang
Reynosa
Bangui
Najaf
Bengbu
Columbus
Zhangzhou
Villahermosa
Sylhet
Nampula
Tianmen
Antipolo
Hengshui
Xinyu
Linfen
Oran
West Rand
Campo Grande
Lubango
Deyang
Ulsan
Liverpool
Londrina
Taiz
Bergamo
Malang
Jiangyin
La Plata
Dandong
Charlotte
Concepcion
Indianapolis
Hermosillo
Liling
Guntur
Baishan
Bahawalpur
Donetsk
Trujillo
Changzhi
Bhiwandi
San Francisco
Tyumen
Liaoyang
Ashgabat
Tuxtla Gutierrez
Soshanguve
Erbil
Puducherry
Changde
Shangqiu
Culiacan
Firozabad
Xingtai
Bogra
Tainan
Fuxin
Cabinda
Huangshi
Umuahia
Hufuf-Mubarraz
Libreville
Palermo
Yibin
Banghazi
Luzhou
Ipoh
Kuerle
Xinghua
Saratov
Quebec City
Cherthala
Valencia
Quzhou
Xinyang
Yongzhou
Winnipeg
Yangquan
Xiaogan
Bucheon
Orumiyeh
Maiduguri
Enugu
Eskisehir
Newcastle upon Tyne
Zhuji
Heze
Huaihua
Barcelona-Puerto La Cruz
Tianshui
Thessaloniki
Bologna
Haicheng
Huludao
Sorocaba
Bozhou
Bikaner
Nottingham
Niigata
Xalapa
Kunshan
Liaocheng
Nellore
Gebze
Nakhon Ratchasima
Jincheng
Frankfurt
Taixing
Lokoja
Cagayan de Oro City
Langfang
Vereeniging
Jiaozuo
Dasmarinas
Kottayam
Ar-Rayyan
Sulaimaniya
Amravati
Zhumadian
Benguela
Gorakhpur
Hamilton
Shaoguan
Meishan
Gaomi
Hanchuan
Krakow
Bunia
Danyang
Muzaffarnagar
Zanzibar
Ansan
Bur Sa'id
Cuttack
Seattle
Anqing
Anqiu
Banjarmasin
Kayamkulam
Zigong
Gaza
Qingyuan
Linhai
Erduosi-Ordoss
Belgaum
Oshogbo
Zaria
Malegaon
Shaoyang
Malanje
Zarqa
Sao Jose dos Campos
Sheffield
Kumamoto
Yan'an
Maturin
Tongliao
Denver
Jiamusi
Yanji
Sialkot
Zaragoza
Mangalore
Kitwe
Tongling
Wuzhou
Suining Sichuan
Ribeirao Preto
Xianyang Shaanxi
Dengzhou
Ibb
Rasht
Yuncheng
Tirupati
Zaporizhzhya
Merca
Dazhou
Panzhihua
Sargodha
Buffalo City
Oaxaca de Juarez
Cheongju
Bhavnagar
Okayama
Yuxi
Bacoor
Nanded Waghala
Gold Coast
Lviv
Dongtai
Yulin Shaanxi
Akure
Jammu
Longyan
Yuyao
Al-Hudaydah
Bali
Florence
Zhangjiagang
The Hague
Cotonou
Salta
Washington
Nashville
Goma
Huambo
Vientiane
Kurnool
Amara
Taicang
Uberlandia
Gulbarga
Taif
Seville
Oklahoma City
Tamale
Bristol
Buraydah
Celaya
Durgapur
Jundiai
Cheonan
Ankang
Tolyatti
Pontianak
Nantes
Zhoukou
Padova
Manama
Boston
Loudi
Renqiu
Bijie
Lattakia
Ezhou
El Paso
Sokoto
Zagreb
Nay Pyi Taw
Liege
Hezhou
Tongxiang
Santiago
Qinzhou
Mar Del Plata
General Santos City
Samsun
Longhai
Tabuk
Denizli
Genoa
Puyang
Zhoushan
Miluo
Macao
Portland
Lodz
Jhansi
Herat
Haimen
Jeonju
Sanya
Neijiang
Erode
As-Suways
Busto Arsizio
Wuhai
Jamnagar
Pachuca de Soto
Uvira
Jubayl
Durango
Chiclayo
Las Vegas
Nasiriyah
Hegang
Izhevsk
Bokaro Steel City
Doha
Be'er Sheva
Enshi
Chongjin
Jambi
Bandar Abbas
Sihui
Bauchi
Irkutsk
Bulawayo
Safaqis
Bissau
Wroclaw
Raurkela
Barnaul
Venezia
Khabarovsk
Belfast
Duesseldorf
Anshun
Bacolod
Verona
Kolhapur
Stuttgart
Jinzhong
Al-Ain
Patiala
Bilaspur
Abakaliki
Sanhe
Yulin Guangxi
Kuching
Hanzhong
Calabar
Ajmer
Memphis
Comilla
Ujjain
Seregno
Hillah
Geneva
Colombo
Xinmi
Riga
Gothenburg
San Jose del Monte
Detroit
Ulyanovsk
Zahedan
Bari
Mbeya
Jingjiang
Mathura
Cenxi
Brighton
Feira De Santana
Tlaxcala
Siping
Agartala
Yaroslavl
Shishi
Imphal
Fuqing
Vladivostok
Kryvyi Rih
Daye
Skopje
Likasi
Tomsk
Shuozhou
Cuito
Samarkand
Sanliurfa
Ogbomosho
Beira
Sangli
Makhachkala
Xiantao
Leipzig
Dengfeng
Cabimas
Qitaihe
Sanmenxia
Tonghua
Ibague
Thoothukkudi
Cuiaba
Xinyi
Mazar-e Sharif
Kingston
Samut Sakhon
Zhaodong
Yiyang Hunan
Malaga
Yichun Heilongjiang
Udaipur
Hamadan
Djibouti
Dongyang
Bouake
Dortmund
Zaoyang
Vellore
Jalgaon
Ardabil
Bloemfontein
Hebi
Gaya
Catania
Juiz De Fora
Kagoshima
Dresden
Yazd
Jiaozhou
Gaozhou
Toulon
Udon Thani
Tirunelveli
Uige
Oujda
Pereira
Essen
Matamoros
Baltimore
Kitchener
Imus
Cangzhou
Poza Rica de Hidalgo
Santa Fe
Karbala
Weinan
Kota Kinabalu
Al-Mansurah
Guangyuan
Milwaukee
Bamenda
Panipat
Kahramanmaras
Ndola
Feicheng
Tepic
Orenburg
Meknes
Albuquerque
Kemerovo
Arak
Bremen
Gomel
Tongchuan
Sakarya
Basel
Al-Mukalla
Mekele
Chiang Rai
Larkana
Khamis Mushayt
Basilan City
Hosur
Anyang
Villavicencio
Rupganj
Leicester
Shouguang
Irbid
Valledupar
Rajahmundry
Yongkang
Utrecht
Sukkur
Haining
Abeokuta
Yanshi
Chaoyang
Rustenburg
Taishan
Calamba
Ambon
Diwaniyah
Rayong
Fresno
Chuzhou
Gombe
Qingzhou
Changning
Longkou
El Djelfa
Angeles City
Loum
Novokuznetsk
Edinburgh
Pingdu
Dali
Tucson
Kerman
Kikwit
Bellary
San Juan
Mbouda
Al-Raqqa
Berbera
Gaoyou
Port of Spain
Sheikhupura
Namangan
Hamhung
Gongyi
Puerto Vallarta
Balashikha
Zinder
Van
Heyuan
Vilnius
Laixi
Ryazan
Santa Marta
Shizuishan
Pietermaritzburg
Chuxiong
Changge
Xingning
Hannover
Shangyu
Surakarta
Kabinda
Sacramento
Naberezhnye Tchelny
Astrakhan
Cuautla Morelos
Grenoble
Nakhon Pathom
Kakinada
Kalasin
Porto Velho
Al-Mahallah al-Kubra
Davanagere
Qianjiang
Vale do Aco
Muzaffarpur
Ziyang
Mataram
Ar-Rusayfah
Kandahar
Changyi
Songyuan
Poznan
Kuantan
Eslamshahr
Duisburg
Guang-an
Penza
Jinjiang
Utsunomiya
Begusarai
Arusha
Kansas City
Mesa
Kirov
Barisal
Ado-Ekiti
Khon-Kaen
Purnia
Tanta
London CA
Atlanta
Jianyang
Bournemouth
Kismaayo
Shuangyashan
Nurenberg
Malatya
Cheboksary
Tirana
Kolwezi
Nanping
El Obeid
Jingmen
Surat Thani
Murcia
Ubon Ratchathani
Matsuyama
Yongcheng
Karaganda
Zhongxiang
Katsina
Lipetsk
Port Sudan
Macapa
Chaohu
La Serena-Coquimbo
Zhuanghe
Latur
Douai-Lens
Omaha
Xuancheng
`.split("\n");