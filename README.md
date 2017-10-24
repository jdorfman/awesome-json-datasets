# Awesome JSON Datasets [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://www.justindorfman.com/assets/images/json.svg" align="right" width="100">](http://www.json.org/)

> A curated list of awesome JSON datasets that don't require authentication.

<h3 align="center">
<a href="https://www.stickermule.com/marketplace/10034-awesome" target="_blank"><img src="https://www.stickermule.com/marketplace/embed_img/10034" width="300px"></a>
</h3>

## Contents
* [Bitcoin](#bitcoin)
* [Cars](#cars)
* [Climate](#climate)
* [Crime](#crime)
* [Currency](#currency)
* [Gaming](#gaming)
* [GitHub API](#github-api)
* [Government](#government)
* [Historical Events](#historical-events)
* [HTTP](#http)
* [Media](#media)
* [NASA](#nasa)
* [Nobel Prize](#nobel-prize)
* [Population](#population)
* [GDP (current US$)](#gdp-current-us)
* [Reddit](#reddit)
* [Travel](#travel)
* [TV Shows](#tv-shows)
* [Movies](#movies)
* [Weather](#weather)
* [Open Source Licenses](#open-source-licenses)
* [More Awesome Lists](#more-awesome-lists)
* [Contributing](#contributing)
* [License](#license)

## Bitcoin
* [Latest Block](https://blockchain.info/latestblock)
* [Unconfirmed Transactions](https://blockchain.info/unconfirmed-transactions?format=json)

> Pro Tip: Check out [Blockchain Data API](https://blockchain.info/api/blockchain_api) for more options.

## Cars
* [All Makes](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes)
* Makes Sold in USA
  * [1940](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1941&sold_in_us=1)
  * [1950](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1950&sold_in_us=1)
  * [1960](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1960&sold_in_us=1)
  * [1970](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1970&sold_in_us=1)
  * [1980](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1980&sold_in_us=1)
  * [1990](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=1990&sold_in_us=1)
  * [2000](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1)
  * [2010](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2010&sold_in_us=1)

> Pro Tip: replace the field-value for a year not listed e.g. `?&cmd=getMakes&year=1969`.
You can also change the country e.g. `sold_in_uk=1`, `sold_in_de=1`, etc.

* Models
  * [Ford](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford)
  * [GMC](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=gmc)
  * [Acura](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=acura)
  * [Cadillac](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Cadillac)
  * [Ferrari](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Ferrari)
  * [Jaguar](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Jaguar)
  * [Mercedes-Benz](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Mercedes-Benz)
  * [BMW](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=BMW)
  * [Nissan](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Nissan)
  * [Porsche](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Porsche)
  * [Subaru](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Subaru)
  * [Toyota](http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=Toyota)

> Pro Tip: replace the field-value for a model not listed e.g. `make=CarCompany`.

## Climate

* [Global Temperature Anomaly)](https://www.ncdc.noaa.gov/cag/time-series/global/globe/land_ocean/ytd/12/1880-2016.json) *(1880-2015 vs. 1901-2000 Average)*
* [US Annual Average Temperature and Anomaly)](https://www.ncdc.noaa.gov/cag/time-series/us/110/00/tavg/ytd/12/1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000) *(1880-2015 (vs. 1901-2000 Average)*
* [Contiguous US Annual Precipitation](https://www.ncdc.noaa.gov/cag/time-series/us/110/00/pcp/ytd/12/1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000) *(1895-2015)*
* [Drought Severity Index](https://www.ncdc.noaa.gov/cag/time-series/us/110/00/pdsi/ytd/12/1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000) *(Palmer for the Contiguous US, 1895-2016)*

## Crime

* [DATA.POLICE.UK](https://data.police.uk/docs/)
  * [Crimes at Location](https://data.police.uk/api/crimes-at-location?date=2015-02&lat=52.629729&lng=-1.131592)
  * [Street Crime Dates](https://data.police.uk/api/crimes-street-dates)
  * [Neighbourhoods](https://data.police.uk/api/leicestershire/neighbourhoods)
  * [List of Forces](https://data.police.uk/api/forces)
* [DATA.GOV](https://www.data.gov/local/)
  * [Chicago (historical data since 2001)](https://data.cityofchicago.org/api/views/ijzp-q8t2/rows.json?accessType=DOWNLOAD)

## Currency

* [Latest Foreign Exchange Rates](http://api.fixer.io/latest)
  * [USD](http://api.fixer.io/latest?base=USD)
  * [AUD](http://api.fixer.io/latest?base=AUD)
  * [GBP](http://api.fixer.io/latest?base=GBP)
  * [HKD](http://api.fixer.io/latest?base=HKD)
  * [HRK](http://api.fixer.io/latest?base=HRK)
  * [HUF](http://api.fixer.io/latest?base=HUF)
  * [JPY](http://api.fixer.io/latest?base=JPY)
  * [ZAR](http://api.fixer.io/latest?base=ZAR)
  * [EUR](http://api.fixer.io/latest?base=EUR)
* [Compare Foreign Exchange Rates](http://api.fixer.io/latest?symbols=USD,GBP) *(Replace `USD,GBP` with `symbols` you want to compare.)*
* [Historical Foreign Exchange Rates](http://api.fixer.io/2000-01-03) *(Replace `2000-01-03` with another date.)*
* [VAT rates for EU](http://jsonvat.com/)

## Gaming
* [BattleField 4 Online Players](http://api.bf4stats.com/api/onlinePlayers?output=json)
* [Pokémon](https://pokeapi.co/docsv2/)
  * [Pokémon by Number](http://pokeapi.co/api/v2/pokemon/1/) *(Replace `1` with desired Pokémon number)*
  * [Types](http://pokeapi.co/api/v2/type/1/) *(Replace `1` with another number to retrieve different type)*
  * [Abilities](http://pokeapi.co/api/v2/ability/1) *(Replace `1` with another number to retrieve different ability)*
* [Pokédex](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)
* [Magic: The Gathering](http://magic.wizards.com)
  * [MTG LEA Set + Extras](https://mtgjson.com/json/LEA-x.json)
  * [MTG LEB Set + Extras](https://mtgjson.com/json/LEB-x.json)
  * [MTG ARN Set + Extras](https://mtgjson.com/json/ARN-x.json)

> Protip: [https://mtgjson.com](https://mtgjson.com) lists many more Magic: The Gathering card data sets, as well as zipped versions of all sets.

* [Steam Player Number](https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?format=json&appid=0)

## GitHub API
* [Emojis](https://api.github.com/emojis)
* [Events](https://api.github.com/events)
* [Gists](https://api.github.com/gists)
* [Meta](https://api.github.com/meta)

## Government
* [Trade.gov](http://developer.trade.gov/api/trade-apis.json)
  * [Market Research Library](http://developer.trade.gov/api/market-research-library.json)
  * [Consolidated Screening Lists](http://developer.trade.gov/api/consolidated-screening-lists.json)
  * [Tariff Rates](http://developer.trade.gov/api/tariff-rates.json)
  * [Business Service Providers](http://developer.trade.gov/api/business-service-providers.json)
  * [ITA Taxonomies](http://developer.trade.gov/api/ita-taxonomies.json)
  * [U.S. Chronic Disease Indicators](https://chronicdata.cdc.gov/api/views/g4ie-h725/rows.json?accessType=DOWNLOAD)
  * [Consumer Complaint Database](http://data.consumerfinance.gov/api/views.json)
  * [Healthcare Associated Infections - Hospital](https://data.medicare.gov/api/views/77hc-ibv8/rows.json?accessType=DOWNLOAD)
* [DATA.CA.GOV](https://data.ca.gov/)
* [DATA.NY.GOV](https://data.ny.gov/browse?limitTo=datasets&utf8=%E2%9C%93)
  * [Cash 4 Life Winning Lottery Numbers](https://data.ny.gov/api/views/kwxv-fwze/rows.json?accessType=DOWNLOAD)
  * [Retail Food Stores](https://data.ny.gov/api/views/9a8c-vfzj/rows.json?accessType=DOWNLOAD)
  * [Child Care Programs](https://data.ny.gov/api/views/cb42-qumz/rows.json?accessType=DOWNLOAD)
  * [Mental Health Programs](https://data.ny.gov/api/views/6nvr-tbv8/rows.json?accessType=DOWNLOAD)
  * [Jobs by Industry](https://data.ny.gov/api/views/pxa9-czw8/rows.json?accessType=DOWNLOAD)
  * [Mega Millions Lottery Winning Numbers](https://data.ny.gov/api/views/5xaw-6ayf/rows.json?accessType=DOWNLOAD)
  * [Powerball Lottery Winning Numbers](https://data.ny.gov/api/views/d6yy-54nr/rows.json?accessType=DOWNLOAD)
  * [Social Media Usage](https://data.cityofnewyork.us/api/views/5b3a-rs48/rows.json?accessType=DOWNLOAD)
* United States Congress
  * [Current US Senators](https://www.govtrack.us/api/v2/role?current=true&role_type=senator)
  * [Current US Representatives](https://www.govtrack.us/api/v2/role?current=true&role_type=representative&limit=438)
  * [Bills Introduced in the 114th Congress (2015-2017)](https://www.govtrack.us/api/v2/bill?congress=114&limit=1000)

> Protip: use offset=1000 to view the next 1000 bills. [GovTrack](https://www.govtrack.us/) provides a [powerful API](https://www.govtrack.us/developers/api) for viewing data on Congress, roll calls, and bills.

* Department of Justice
  * [Blog Entries](https://www.justice.gov/api/v1/blog_entries.json?amp%3Bpagesize=2)
  * [Press Releases](https://www.justice.gov/api/v1/press_releases.json?pagesize=2)
  * [Speeches](https://www.justice.gov/api/v1/speeches.json?pagesize=2)
  * [Vacancy Announcements](http://www.justice.gov/api/v1/vacancy_announcements.json?pagesize=2)
* Department of Labor
  * [Total Private Average Weekly Hours of All Employees](https://api.bls.gov/publicAPI/v2/timeseries/data/CES0500000002)
  * [Total Private Average Hourly Earnings of All Employees](https://api.bls.gov/publicAPI/v2/timeseries/data/CES0500000003)
* Scottish Parliament
  * [Departments](https://data.parliament.scot/api/departments)
  * [Events](https://data.parliament.scot/api/events)
  * [Government Roles](https://data.parliament.scot/api/governmentroles)
  * [Members](https://data.parliament.scot/api/members)

> Pro Tip: you can do **a lot** more at [http://parliamentdata.ca/](http://parliamentdata.ca/)

* EU Lobbying Transparency Register
  * [Country](http://api.lobbyfacts.eu/api/1/country)
  * [Entity](http://api.lobbyfacts.eu/api/1/entity)
  * [Representative](http://api.lobbyfacts.eu/api/1/representative)
  * [Person](http://api.lobbyfacts.eu/api/1/person)
  * [Category](http://api.lobbyfacts.eu/api/1/category)
  * [Financial](http://api.lobbyfacts.eu/api/1/financial_data)
  * [Accreditation](http://api.lobbyfacts.eu/api/1/accreditation)
* Government of India
  * [State Codes](http://vocab.nic.in/rest.php/states/json)
  * [Consumer Price Index](https://data.gov.in/node/1084041/datastore/export/json)
  * [PMJDY Monthly Report](https://data.gov.in/node/739941/datastore/export/json)
  * [Agriculture Production](https://data.gov.in/node/135611/datastore/export/json)
  * [Number of Districts/DRDAs/Blocks/Villages](https://data.gov.in/node/100853/datastore/export/json)
  * [Gross Domestic Product at Current Prices](https://www.quandl.com/api/v1/datasets/MOSPI/GDP.json)
* [Australia](http://data.gov.au/)
  * [ABC Local Stations](http://data.gov.au/geoserver/abc-local-stations/wfs?request=GetFeature&typeName=ckan_d534c0e9_a9bf_487b_ac8f_b7877a09d162&outputFormat=json)
  * [Ballarat BBQ's](http://data.gov.au/dataset/f2ab58d7-18b7-44dc-9121-9cd0ae829d22/resource/8057e47e-967b-4e42-9451-06a8031133c8/download/ballaratbbqs.geojson)
  * [Boat Ramps in the Gold Coast Area](http://data.gov.au/geoserver/boat-ramps/wfs?request=GetFeature&typeName=af1b8d1c_a186_4e72_8e9e_549a8065e970&outputFormat=json)
  * [Indigenous Land Use Agreements (Registered or in Notification)](http://data.gov.au/geoserver/indigenous-land-use-agreements-registered-or-in-notification/wfs?request=GetFeature&typeName=ckan_9e837144_8070_4983_8bf0_15e7ceb56ed7&outputFormat=json)
  * [NSW State Electoral Boundaries - PSMA Administrative Boundaries](http://data.gov.au/geoserver/nsw-state-electoral-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=8047ddd1_7193_4667_aef9_b75bc3076075&outputFormat=json)
  * [VIC Police Station Locations](http://data.gov.au/geoserver/police-station-locations/wfs?request=GetFeature&typeName=762b47b2_e706_4cab_b0c7_cf8e406aefc1&outputFormat=json)
* Amsterdam
  * [Shops](http://open.datapunt.amsterdam.nl/Shoppen.json)
  * [Food and Drinks](http://open.datapunt.amsterdam.nl/EtenDrinken.json)
  * [Museums and Galleries](http://open.datapunt.amsterdam.nl/MuseaGalleries.json)
* [Michigan](https://data.michigan.gov/browse)
  * [Fish](https://data.michigan.gov/api/views/he9h-7fpa/rows.json?accessType=DOWNLOAD)
  * [State Facts](https://data.michigan.gov/api/views/pxdv-rgvb/rows.json?accessType=DOWNLOAD)
  * [Baby Names](https://data.michigan.gov/api/views/nndy-b6rm/rows.json?accessType=DOWNLOAD)

## Historical Events
* Languages
  * [English](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=en)
  * [German](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=de)
  * [Italian](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=it)
  * [Spanish](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=es)
  * [Portuguese](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=pt)
  * [Catalan](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=ca)
  * [Indonesian](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=id)
  * [Romanian](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=ro)
  * [Turkish](http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=tr)

> Pro Tip: You can change `begin_date` and `end_date` in URL to get events in a specific interval. More options [here](http://www.vizgr.org/historical-events/).

## HTTP
* [IP](http://httpbin.org/ip)
* [user-agent](http://httpbin.org/user-agent)
* [headers](http://httpbin.org/headers)
* [GET](http://httpbin.org/get)
* [gzip](http://httpbin.org/gzip)
* [deflate](http://httpbin.org/deflate)
* [response-headers](http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=MaxCDN)
* [cookies](http://httpbin.org/cookies)
* [stream](http://httpbin.org/stream/10)
* [delay](http://httpbin.org/delay/3)
* [cache](http://httpbin.org/cache/60) *(`60` === `60 seconds`)*

> Pro Tip: you can do **a lot** more at [http://httpbin.org](http://httpbin.org/).

## Media
* [Giphy](https://github.com/Giphy/GiphyAPI)
  * [Cats](http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC)
  * [Dogs](http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC)
  * [Surprised](http://api.giphy.com/v1/gifs/search?q=surprised&api_key=dc6zaTOxFJmzC)
  * [Confused](http://api.giphy.com/v1/gifs/search?q=confused&api_key=dc6zaTOxFJmzC)
  * [Angry](http://api.giphy.com/v1/gifs/search?q=angry&api_key=dc6zaTOxFJmzC)
  * [Happy](http://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC)
  * [Crazy](http://api.giphy.com/v1/gifs/search?q=crazy&api_key=dc6zaTOxFJmzC)
  * [Make it Rain](http://api.giphy.com/v1/gifs/search?q=make+it+rain&api_key=dc6zaTOxFJmzC)

> Pro Tip: replace the `q` field-value for a query not listed e.g. `q=cartman+brah`.

## NASA
* [ISS Current Location](http://api.open-notify.org/iss-now.json)
* [How Many People Are In Space Right Now](http://api.open-notify.org/astros.json)
* [Earth Meteorite Landings](https://data.nasa.gov/resource/y77d-th95.json)
* [Near-Earth Asteroids and Comets](https://data.nasa.gov/resource/2vr3-k9wn.json) *(Discovered By NEOWISE)*

## Natural Disasters
* [Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson)

## Nobel Prize
* [Prize](http://api.nobelprize.org/v1/prize.json)
* [Laureate](http://api.nobelprize.org/v1/laureate.json)
* [Country](http://api.nobelprize.org/v1/country.json)

## Open Source Licenses
* [All](https://api.opensource.org/licenses/)
* [Copyleft](https://api.opensource.org/licenses/copyleft)
* [OSI Approved](https://api.opensource.org/licenses/osi-approved)
* [Redundant](https://api.opensource.org/licenses/redundant)
* [Permissive](https://api.opensource.org/licenses/permissive)
* [Obsolete](https://api.opensource.org/licenses/obsolete)
* [Misc](https://api.opensource.org/licenses/miscellaneous)
* [Popular](https://api.opensource.org/licenses/popular)
* [Discouraged](https://api.opensource.org/licenses/discouraged)
* [Non-reusable](https://api.opensource.org/licenses/non-reusable)
* [Special Purpose](https://api.opensource.org/licenses/special-purpose)
* [Retired](https://api.opensource.org/licenses/retired)

> Become an OSI member [here](https://opensource.org/civicrm/contribute/transact?reset=1&id=1)

## Population

* Total Population Today
  * [Earth](http://api.population.io/1.0/population/World/today-and-tomorrow/)
  * [Brazil](http://api.population.io/1.0/population/Brazil/today-and-tomorrow/)
  * [France](http://api.population.io/1.0/population/France/today-and-tomorrow/)
  * [Germany](http://api.population.io/1.0/population/Germany/today-and-tomorrow/)
  * [Greece](http://api.population.io/1.0/population/Greece/today-and-tomorrow/)
  * [Italy](http://api.population.io/1.0/population/Italy/today-and-tomorrow/)
  * [Japan](http://api.population.io/1.0/population/Japan/today-and-tomorrow/)
  * [Kenya](http://api.population.io/1.0/population/Kenya/today-and-tomorrow/)
  * [Mexico](http://api.population.io/1.0/population/Mexico/today-and-tomorrow/)
  * [Poland](http://api.population.io/1.0/population/Poland/today-and-tomorrow/)
  * [India](http://api.population.io/1.0/population/India/today-and-tomorrow/)
  * [United States](http://api.population.io/1.0/population/United%20States/today-and-tomorrow/)

> Pro Tip: [List of all Countries](http://api.population.io/1.0/countries) tracked

* United States Population Table (Ages 0-100)
    * [1950](http://api.population.io/1.0/population/1950/United%20States/)
    * [1960](http://api.population.io/1.0/population/1960/United%20States/)
    * [1970](http://api.population.io/1.0/population/1970/United%20States/)
    * [1980](http://api.population.io/1.0/population/1980/United%20States/)
    * [1990](http://api.population.io/1.0/population/1990/United%20States/)
    * [2000](http://api.population.io/1.0/population/2000/United%20States/)
    * [2010](http://api.population.io/1.0/population/2010/United%20States/)

* Historical Population (Since 1960)
  * [China](http://api.worldbank.org/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json)
  * [India](http://api.worldbank.org/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json)

> Heads up: Use `cURL` to view raw `JSON` e.g.:
`$ curl -s http://api.population.io/1.0/countries | python -m json.tool`

## GDP (current US$)
* [USA](http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)
* [China](http://api.worldbank.org/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)
* [India](http://api.worldbank.org/countries/IND/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)

> Pro Tip: Link to country list [Here](http://api.worldbank.org/countries?per_page=304&format=json)

## Reddit
* [/r/all](https://www.reddit.com/r/all.json)
* [/r/AskReddit](https://www.reddit.com/r/AskReddit.json)
* [/r/funny](https://www.reddit.com/r/funny.json)
* [/r/pics](https://www.reddit.com/r/pics.json)
* [/r/todayilearned](https://www.reddit.com/r/todayilearned.json)
* [/r/announcements](https://www.reddit.com/r/announcements.json)
* [/r/worldnews](https://www.reddit.com/r/worldnews.json)
* [/r/science](https://www.reddit.com/r/science.json)
* [/r/IAmA](https://www.reddit.com/r/IAmA.json)
* [/r/videos](https://www.reddit.com/r/videos.json)
* [/r/gaming](https://www.reddit.com/r/gaming.json)
* [/r/linux](https://www.reddit.com/r/linux.json)

> Pro Tip: you can append `.json` to any subreddit url.

## Travel
* [Global Airfields](https://ckannet-storage.commondatastorage.googleapis.com/2014-12-13T15:15:31.729Z/airfields.json)
* [Monthly Airline Delays by Airport, 2003-2016](https://think.cs.vt.edu/corgis/json/airlines/airlines.json)
* FAA Airport Status
  * [SFO](http://services.faa.gov/airport/status/SFO?format=application/json)
  * [LAX](http://services.faa.gov/airport/status/LAX?format=application/json)
  * [PHX](http://services.faa.gov/airport/status/PHX?format=application/json)
  * [JFK](http://services.faa.gov/airport/status/JFK?format=application/json)
  * [ATL](http://services.faa.gov/airport/status/ATL?format=application/json)
  * [MIA](http://services.faa.gov/airport/status/MIA?format=application/json)
  * [AUS](http://services.faa.gov/airport/status/AUS?format=application/json)
  * [BOS](http://services.faa.gov/airport/status/BOS?format=application/json)
  * [CLE](http://services.faa.gov/airport/status/CLE?format=application/json)
  * [ORD](http://services.faa.gov/airport/status/ORD?format=application/json)
  * [PDX](http://services.faa.gov/airport/status/PDX?format=application/json)
  * [SJC](http://services.faa.gov/airport/status/SJC?format=application/json)

> Heads up: Only works for US airports only, not international.

## TV Shows

* [Mr. Robot (USA)](http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes)
* [Better Call Saul (AMC)](http://api.tvmaze.com/singlesearch/shows?q=better-call-saul&embed=episodes)
* [Homeland (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=Homeland&embed=episodes)
* [Silicon Valley (HBO)](http://api.tvmaze.com/singlesearch/shows?q=silicon-valley&embed=episodes)
* [The Walking Dead (AMC)](http://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes)
* [South Park (Comedy Central)](http://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes)
* [Game of Thrones (HBO)](http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes)
* [House of Cards (Netflix)](http://api.tvmaze.com/singlesearch/shows?q=house-of-cards&embed=episodes)
* [The Big Bang Theory (CBS)](http://api.tvmaze.com/singlesearch/shows?q=big-bang-theory&embed=episodes)
* [Narcos (Netflix)](http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes)
* [Black Mirror (Netflix)](http://api.tvmaze.com/singlesearch/shows?q=black-mirror&embed=episodes)
* [Stranger Things (Netflix)](http://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes)
* [Rick and Morty (Adult Swim)](http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes)
* [Westworld (HBO)](http://api.tvmaze.com/singlesearch/shows?q=westworld&embed=episodes)

> Pro Tip: replace the field-value for a show not listed e.g. `shows?q=show-name`. More options [here](http://www.tvmaze.com/api)

## Movies
* [Showtime](http://showtimes.everyday.in.th/api/v2/)
  * [Current Movies in Thailand](http://showtimes.everyday.in.th/api/v2/movie/)
  * [Movie Theaters in Thailand](http://showtimes.everyday.in.th/api/v2/theater/)

## Weather
* [Los Angeles](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Los%20Angeles%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Chicago](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Chicago%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [New York](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22New%20York%2C%20NY%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Miami](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Miami%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [London](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22London%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Paris](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Paris%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Berlin](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Berlin%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Moscow](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Moscow%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Jerusalem](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Jerusalem%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Tokyo](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Tokyo%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Sydney](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Sydney%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Buenos Aires](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Buenos%20Aires%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)

> Pro Tip: generate URLs for any location at [Yahoo Weather API](https://developer.yahoo.com/weather/)

## More Awesome Lists
* [Awesome](https://github.com/sindresorhus/awesome) *(The OG List)*
* [Help Wanted](https://github.com/fullstackla/awesome-help-wanted) *(Open Source projects looking for Help)*
* [JSON](https://github.com/burningtree/awesome-json) *(Libraries and Resources)*
* [WPO](https://github.com/davidsonfellipe/awesome-wpo) *(Web Performance Optimization)*
* [Shell](https://github.com/alebcay/awesome-shell) *(CLI Frameworks, Toolkits and Guides)*
* [Public APIs](https://github.com/toddmotto/public-apis) *(JSON APIs for use in web dev, some of which require authentication)*
* [Public Datasets](https://github.com/caesar0301/awesome-public-datasets) *(Datasets beyond just JSON)*
* [Style Guides](https://github.com/kciter/awesome-style-guide) *(Programming Languages, Platforms, Frameworks)*

## Contributing
If you want to contribute, please read the [contribution guidelines](CONTRIBUTING.md).

## License
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [MaxCDN](https://www.maxcdn.com) has waived all copyright and related or neighboring rights to this work.
