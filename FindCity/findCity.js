var cities=["Afghanistan",
		"Albania",
		"Algeria",
		"Andorra",
		"Angola",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bhutan",
		"Bolivia",
		"Bosnia and Herzegovina",
		"Botswana",
		"Brazil",
		"Brunei",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Cape Verde",
		"Central African Republic",
		"Chad",
		"Chile",
		"China",
		"Colombi",
		"Comoros",
		"Congo (Brazzaville)",
		"Congo",
		"Costa Rica",
		"Cote d'Ivoire",
		"Croatia",
		"Cuba",
		"Cyprus",
		"Czech Republic",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic",
		"East Timor (Timor Timur)",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Ethiopia",
		"Fiji",
		"Finland",
		"France",
		"Gabon",
		"Gambia, The",
		"Georgia",
		"Germany",
		"Ghana",
		"Greece",
		"Grenada",
		"Guatemala",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Honduras",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran",
		"Iraq",
		"Ireland",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Korea, North",
		"Korea, South",
		"Kuwait",
		"Kyrgyzstan",
		"Laos",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Macedonia",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Marshall Islands",
		"Mauritania",
		"Mauritius",
		"Mexico",
		"Micronesia",
		"Moldova",
		"Monaco",
		"Mongolia",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands",
		"New Zealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Poland",
		"Portugal",
		"Qatar",
		"Romania",
		"Russia",
		"Rwanda",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Vincent",
		"Samoa",
		"San Marino",
		"Sao Tome and Principe",
		"Saudi Arabia",
		"Senegal",
		"Serbia and Montenegro",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"Somalia",
		"South Africa",
		"Spain",
		"Sri Lanka",
		"Sudan",
		"Suriname",
		"Swaziland",
		"Sweden",
		"Switzerland",
		"Syria",
		"Taiwan",
		"Tajikistan",
		"Tanzania",
		"Thailand",
		"Togo",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates",
		"United Kingdom",
		"United States",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Vatican City",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Zambia",
		"Zimbabwe"];

		var comment="";

		var screencity=[];

		var index=Math.floor((Math.random())*cities.length);

		var city=cities[index].toUpperCase();

		var result=0;
		console.log(city);

		for(i=0;i<city.length;i++){
			if(city[i]==" "){
				screencity[i]=" / ";
			}else
		         screencity.push("_ ");
			}
		document.getElementById("wanted").innerHTML=screencity.join("");
		var search=document.querySelector(".search");                              //herf=var search=document.querySelector(".search").value islemedi
		var run=document.querySelector(".run");
		run.addEventListener("click",yoxla);


		
		function yoxla(){
		for(i=0;i<city.length;i++){
			console.log(search.value.length);
		if(search.value.toUpperCase()==city[i]){
		screencity[i]=city[i];
		}
		}
		document.getElementById("wanted").innerHTML=screencity.join(" ");
		search.value="";
		result++;
		}
		
	    var helpclick=0;
		
		var helpbt=document.querySelector(".help");
		helpbt.addEventListener("click",give);
		function give(){
			helpclick++;
			result++;

			for(i=0;i<helpclick;i++){
				var helpindex=Math.floor(Math.random()*city.length);

		
				screencity[helpindex]=city[helpindex];
				
				
				document.getElementById("wanted").innerHTML=screencity.join("");
				}
		}
		var ready=document.querySelector('.ready');
		ready.addEventListener("click",showresult);
		function showresult(){
			document.getElementById("wanted").innerHTML=city;
			if(result<5){
			comment="Əla";
			}else if(result>=5){
			comment="Qənaətbəxş";
			}else if(result>=10){
			comment="Zəif";
		}

		document.querySelector(".result").innerHTML="Siz oyunu "+result+" addımda tamamladınız bu "+comment+" nəticədir!";

		}

		