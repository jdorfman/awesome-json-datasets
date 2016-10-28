# Awesome JSON Datasets
A curated list of awesome JSON datasets that don't require authentication.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Build Status](https://travis-ci.org/jdorfman/awesome-json-datasets.svg)](https://travis-ci.org/jdorfman/awesome-json-datasets)

<h3 align="center">
<a href="https://www.stickermule.com/marketplace/10034-awesome" target="_blank"><img src="https://www.stickermule.com/marketplace/embed_img/10034" width="150px"></a>
</h3>

**Tip**: You can find simply press <kbd>Command</kbd> + <kbd>F</kbd> or <kbd>Ctrl</kbd> + <kbd>F</kbd> to search for a keyword.

## Table of Contents (TOC)
* [Bitcoin](#bitcoin)
* [Cars](#cars)
* [Crime](#crime)
* [Currency](#currency)
* [Football](#football)
* [Gaming](#gaming)
* [GitHub API](#github-api)
* [Government](#government)
* [Historical Events](#historical-events)
* [HTTP](#http)
* [Media](#media)
* [NASA](#nasa)
* [Nobel Prize](#nobel-prize)
* [Node.js API](#nodejs-api)
* [Population](#population)
* [GDP (current US$)](#gdp-current-us)
* [Reddit](#reddit)
* [Travel](#travel)
* [TV Shows](#tv-shows)
* [Movies](#movies)
* [Weather](#weather)
* [Open Source Licenses](#open-source-licenses)
* [Other](#other)
* [More Awesome Lists](#more-awesome-lists)
* [Contributing](#contributing)
* [License](#license)

## Bitcoin
* [Latest Block](https://blockchain.info/latestblock)
* [Unconfirmed Transactions](https://blockchain.info/unconfirmed-transactions?format=json)

> Pro Tip: Check out [Blockchain Data API](https://blockchain.info/api/blockchain_api) for more options.

* [Global Tickers](https://api.bitcoinaverage.com/ticker/global/)
  * [All](https://api.bitcoinaverage.com/ticker/global/all)
  * [USD](https://api.bitcoinaverage.com/ticker/global/USD/)
  * [GBP](https://api.bitcoinaverage.com/ticker/global/GBP/)
  * [EUR](https://api.bitcoinaverage.com/ticker/global/EUR/)
  * [INR](https://api.bitcoinaverage.com/ticker/global/INR/)
  * [AUD](https://api.bitcoinaverage.com/ticker/global/AUD/)
  * [CAD](https://api.bitcoinaverage.com/ticker/global/CAD/)
  * [JPY](https://api.bitcoinaverage.com/ticker/global/JPY/)
  * [CNY](https://api.bitcoinaverage.com/ticker/global/CNY/)

> Pro Tip: Currencies dedicated endpoints are available at `https://api.bitcoinaverage.com/ticker/global/ENTER-SYMBOL/`

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

## Crime

* [DATA.POLICE.UK](https://data.police.uk/docs/)
  * [Crimes at Location](https://data.police.uk/api/crimes-at-location?date=2015-02&lat=52.629729&lng=-1.131592)
  * [Street Crime Dates](https://data.police.uk/api/crimes-street-dates)
  * [Neighbourhoods](https://data.police.uk/api/leicestershire/neighbourhoods)
  * [List of Forces](https://data.police.uk/api/forces)
    * [Leicestershire Police](https://data.police.uk/api/forces/leicestershire)
    * [Bedfordshire Police](https://data.police.uk/api/forces/bedfordshire)
    * [Cleveland Police](https://data.police.uk/api/forces/cleveland)
    * [City of London Police](https://data.police.uk/api/forces/city-of-london)
    * [Dorset Police](https://data.police.uk/api/forces/dorset)
    * [Devon & Cornwall Police](https://data.police.uk/api/forces/devon-and-cornwall)
    * [Dyfed-Powys Police](https://data.police.uk/api/forces/dyfed-powys)
    * [Essex Police](https://data.police.uk/api/forces/essex)
    * [Greater Manchester Police](https://data.police.uk/api/forces/greater-manchester)
    * [Gwent Police](https://data.police.uk/api/forces/gwent)
    * [Humberside Police](https://data.police.uk/api/forces/humberside)
    * [Kent Police](https://data.police.uk/api/forces/kent)
    * [Leicestershire Police](https://data.police.uk/api/forces/leicestershire)
    * [Lincolnshire Police](https://data.police.uk/api/forces/lincolnshire)
    * [Merseyside Police](https://data.police.uk/api/forces/merseyside)
    * [Metropolitan Police Service](https://data.police.uk/api/forces/metropolitan)
    * [North Wales Police](https://data.police.uk/api/forces/north-wales)
    * [North Yorkshire Police](https://data.police.uk/api/forces/north-yorkshire)
    * [Northamptonshire Police](https://data.police.uk/api/forces/northamptonshire)
    * [Northumbria Police](https://data.police.uk/api/forces/northumbria)
    * [Nottinghamshire Police](https://data.police.uk/api/forces/nottinghamshire)
    * [Police Service of Northern Ireland](https://data.police.uk/api/forces/northern-ireland)
    * [South Wales Police](https://data.police.uk/api/forces/south-wales)
    * [South Yorkshire Police](https://data.police.uk/api/forces/south-yorkshire)
    * [Staffordshire Police](https://data.police.uk/api/forces/staffordshire)
    * [Surrey Police](https://data.police.uk/api/forces/surrey)
    * [Sussex Police](https://data.police.uk/api/forces/sussex)
    * [Thames Valley Police](https://data.police.uk/api/forces/thames-valley)
    * [Warwickshire Police](https://data.police.uk/api/forces/warwickshire)
    * [West Mercia Police](https://data.police.uk/api/forces/west-mercia)
    * [West Midlands Police](https://data.police.uk/api/forces/west-midlands)
    * [West Yorkshire Police](https://data.police.uk/api/forces/west-yorkshire)
    * [Wiltshire Police](https://data.police.uk/api/forces/wiltshire)
    * [Avon and Somerset Constabulary](https://data.police.uk/api/forces/avon-and-somerset)
    * [Cambridgeshire Constabulary](https://data.police.uk/api/forces/cambridgeshire)
    * [Cheshire Constabulary](https://data.police.uk/api/forces/cheshire)
    * [Cumbria Constabulary](https://data.police.uk/api/forces/cumbria)
    * [Derbyshire Constabulary](https://data.police.uk/api/forces/derbyshire)
    * [Durham Constabulary](https://data.police.uk/api/forces/durham)
    * [Gloucestershire Constabulary](https://data.police.uk/api/forces/gloucestershire)
    * [Hampshire Constabulary](https://data.police.uk/api/forces/hampshire)
    * [Hertfordshire Constabulary](https://data.police.uk/api/forces/hertfordshire)
    * [Lancashire Constabulary](https://data.police.uk/api/forces/lancashire)
    * [Norfolk Constabulary](https://data.police.uk/api/forces/norfolk)
    * [Suffolk Constabulary](https://data.police.uk/api/forces/suffolk)
* [DATA.GOV](https://www.data.gov/local/)
  * [Chicago (historical data since 2001)](https://data.cityofchicago.org/api/views/ijzp-q8t2/rows.json?accessType=DOWNLOAD)

## Currency

* [Latest Foreign Exchange Rates](http://api.fixer.io/latest)
  * [USD](http://api.fixer.io/latest?base=USD)
  * [AUD](http://api.fixer.io/latest?base=AUD)
  * [BGN](http://api.fixer.io/latest?base=BGN)
  * [BRL](http://api.fixer.io/latest?base=BRL)
  * [CAD](http://api.fixer.io/latest?base=CAD)
  * [CHF](http://api.fixer.io/latest?base=CHF)
  * [CNY](http://api.fixer.io/latest?base=CNY)
  * [CZY](http://api.fixer.io/latest?base=CZK)
  * [DKK](http://api.fixer.io/latest?base=DKK)
  * [GBP](http://api.fixer.io/latest?base=GBP)
  * [HKD](http://api.fixer.io/latest?base=HKD)
  * [HRK](http://api.fixer.io/latest?base=HRK)
  * [HUF](http://api.fixer.io/latest?base=HUF)
  * [IDR](http://api.fixer.io/latest?base=IDR)
  * [ILS](http://api.fixer.io/latest?base=ILS)
  * [INR](http://api.fixer.io/latest?base=INR)
  * [JPY](http://api.fixer.io/latest?base=JPY)
  * [KRW](http://api.fixer.io/latest?base=KRW)
  * [MXN](http://api.fixer.io/latest?base=MXN)
  * [MYR](http://api.fixer.io/latest?base=MYR)
  * [NOK](http://api.fixer.io/latest?base=NOK)
  * [NZD](http://api.fixer.io/latest?base=NZD)
  * [PHP](http://api.fixer.io/latest?base=PHP)
  * [PLN](http://api.fixer.io/latest?base=PLN)
  * [RON](http://api.fixer.io/latest?base=RON)
  * [RUB](http://api.fixer.io/latest?base=RUB)
  * [SEK](http://api.fixer.io/latest?base=SEK)
  * [SGD](http://api.fixer.io/latest?base=SGD)
  * [THB](http://api.fixer.io/latest?base=THB)
  * [TRY](http://api.fixer.io/latest?base=TRY)
  * [ZAR](http://api.fixer.io/latest?base=ZAR)
  * [EUR](http://api.fixer.io/latest?base=EUR)
* [Compare Foreign Exchange Rates](http://api.fixer.io/latest?symbols=USD,GBP) *(Replace `USD,GBP` with `symbols` you want to compare.)*
* [Historical Foreign Exchange Rates](http://api.fixer.io/2000-01-03) *(Replace `2000-01-03` with another date.)*
* [VAT rates for EU](http://jsonvat.com/)

## Football
* English Premier League
  * 2015 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json)
  * 2016 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json)
* Deutsche Bundesliga
  * 2015 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/de.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/de.1.json)
  * 2016 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/de.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/de.1.json)
* Spanish Primera División ("La Liga")
  * 2015 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/es.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/es.1.json)
  * 2016 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/es.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/es.1.json)
* Italian Serie A
  * 2015 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/it.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/it.1.json)
  * 2016 [Clubs](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/it.1.clubs.json) [Matches](https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/it.1.json)

## Gaming
* [BattleField 4](http://bf4stats.com/api)
  * [Online Players](http://api.bf4stats.com/api/onlinePlayers?output=json)

* Pokémon
  * [PokéApi](https://pokeapi.co/docsv2/)
    * [Pokémon by Number](http://pokeapi.co/api/v2/pokemon/1/) *(Replace `1` with desired Pokémon number)*
    * [Types](http://pokeapi.co/api/v2/type/1/) *(Replace `1` with another number to retrieve different type)*
    * [Abilities](http://pokeapi.co/api/v2/ability/1) *(Replace `1` with another number to retrieve different ability)*
 * [PokémonGo Pokédex](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)

* [Magic: The Gathering](http://magic.wizards.com)
  * [MTG LEA Set](https://mtgjson.com/json/LEA.json)
  * [MTG LEA Set + Extras](https://mtgjson.com/json/LEA-x.json)
  * [MTG LEB Set](https://mtgjson.com/json/LEB.json)
  * [MTG LEB Set + Extras](https://mtgjson.com/json/LEB-x.json)
  * [MTG ARN Set](https://mtgjson.com/json/ARN.json)
  * [MTG ARN Set + Extras](https://mtgjson.com/json/ARN-x.json)

> Protip: [https://mtgjson.com](https://mtgjson.com) lists many more Magic: The Gathering card data sets, as well as zipped versions of all sets.

* [Hearthstone](https://hearthstonejson.com/)
  * [All cards, in every language](https://api.hearthstonejson.com/v1/latest/all/cards.json)
  * [All cards, in English](https://api.hearthstonejson.com/v1/latest/enUS/cards.json)
  * [Collectible cards, in English](https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json)
  * [Card backs, in English](https://api.hearthstonejson.com/v1/latest/enUS/cardbacks.json)
* [Steam Player Number](https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?format=json&appid=0)

* [EA Sports FIFA](https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1) *(Replace `?page=1` with another page number up to totalPages, currently 615)*

## GitHub API
* [Emojis](https://api.github.com/emojis)
* [Events](https://api.github.com/events)
* [Gists](https://api.github.com/gists)
* [Meta](https://api.github.com/meta)

## Government
* [Trade.gov](http://developer.trade.gov/api/trade-apis.json)
  * [Market Research Library](http://developer.trade.gov/api/market-research-library.json)
  * [Consolidated Screening Lists](http://developer.trade.gov/api/consolidated-screening-lists.json)
  * [Trade Events](http://developer.trade.gov/api/trade-events.json)
  * [Trade Events](http://developer.trade.gov/api/trade-events.json)
  * [Trade Leads](http://developer.trade.gov/api/trade-leads.json)
  * [Tariff Rates](http://developer.trade.gov/api/tariff-rates.json)
  * [FAQs on Exporting](http://developer.trade.gov/api/ita-faqs.json)
  * [ITA Offices & Centers](http://developer.trade.gov/api/ita-office-locations.json)
  * [Trade News & Articles](http://developer.trade.gov/api/ita-articles.json)
  * [List of dpw maintained street trees](https://data.sfgov.org/api/views/tkzw-k3nq/rows.json?accessType=DOWNLOAD)
  * [Zip Code to USEAC](http://developer.trade.gov/api/zip-code-to-useac.json)
  * [Business Service Providers](http://developer.trade.gov/api/business-service-providers.json)
  * [ITA Taxonomies](http://developer.trade.gov/api/ita-taxonomies.json)
  * [U.S. Chronic Disease Indicators](https://chronicdata.cdc.gov/api/views/g4ie-h725/rows.json?accessType=DOWNLOAD)
  * [Consumer Complaint Database](http://data.consumerfinance.gov/api/views.json)
  * [Healthcare Associated Infections - Hospital](https://data.medicare.gov/api/views/77hc-ibv8/rows.json?accessType=DOWNLOAD)
* [DATA.CA.GOV](https://data.ca.gov/)
  * [Chemicals In Cosmetics](https://chhs.data.ca.gov/api/views/7kri-yb7t/rows.json?accessType=DOWNLOAD)
* [DATA.NY.GOV](https://data.ny.gov/browse?limitTo=datasets&utf8=%E2%9C%93)
  * [Cash 4 Life Winning Lottery Numbers](https://data.ny.gov/api/views/kwxv-fwze/rows.json?accessType=DOWNLOAD)
  * [Retail Food Stores](https://data.ny.gov/api/views/9a8c-vfzj/rows.json?accessType=DOWNLOAD)
  * [Child Care Programs](https://data.ny.gov/api/views/cb42-qumz/rows.json?accessType=DOWNLOAD)
  * [Mental Health Programs](https://data.ny.gov/api/views/6nvr-tbv8/rows.json?accessType=DOWNLOAD)
  * [Press Releases](https://data.ny.gov/api/views/n2k2-wzfz/rows.json?accessType=DOWNLOAD)
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
  * [Blog Entries](http://www.justice.gov/api/v1/blog_entries.json?amp%3Bpagesize=2)
  * [Press Releases](http://www.justice.gov/api/v1/press_releases.json?pagesize=2)
  * [Speeches](http://www.justice.gov/api/v1/speeches.json?pagesize=2)
  * [Vacancy Announcements](http://www.justice.gov/api/v1/vacancy_announcements.json?pagesize=2)
* Department of Labor
  * [Total Private Average Weekly Hours of All Employees](http://api.bls.gov/publicAPI/v2/timeseries/data/CES0500000002)
  * [Total Private Average Hourly Earnings of All Employees](http://api.bls.gov/publicAPI/v2/timeseries/data/CES0500000003)
* Parliament of Canada
  * [Bills](http://api.parliamentdata.ca/bills)
  * [Representatives](http://api.parliamentdata.ca/representatives)
  * [Committees](http://api.parliamentdata.ca/committees)
* Scottish Parliament
  * [Departments](https://data.parliament.scot/api/departments)
  * [Events](https://data.parliament.scot/api/events)
  * [Government Roles](https://data.parliament.scot/api/governmentroles)
  * [Members](https://data.parliament.scot/api/members)

> Pro Tip: you can do **a lot** more at [http://parliamentdata.ca/](http://parliamentdata.ca/)

* [City of Toronto](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=9e56e03bb8d1e310VgnVCM10000071d60f89RCRD)
  * [Bicycle Stations (Bike Share Toronto)](https://feeds.bikesharetoronto.com/stations/stations.json)
  * [BodySafe](http://app.toronto.ca/opendata/bodysafe/full_list.json?v=1.00&row_start=1&row_count=1000000)
  * [Doors Open 2016](http://wx.toronto.ca/inter/culture/doorsopen.nsf/DoorsOpenBuildingJSON.xsp)
  * [Traffic Cameras](http://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data/tmcearthcameras.json)
  * [Heat Alerts and Extreme Heat Alerts](http://app.toronto.ca/opendata/heat_alerts/heat_alerts_list.json)
  * [Road Restrictions](http://www1.toronto.ca/transportation/roadrestrictions/RoadRestrictions.json)
* [Toronto Public Library](http://opendata.tplcs.ca/)
  * [Top Website Searches from 2010 to 2014](http://opendata.tplcs.ca/data/TPL_top_website_searches_2010-2014.json)
* [City of Vancouver](http://vancouver.ca/your-government/open-data-catalogue.aspx)
  * [Electric Vehicle Charging Stations](http://bit.ly/2edrW46)
  * [Drinking Fountains](http://bit.ly/2dKvJVM)
  * [Weekend Playfield Status](http://bit.ly/2eEA4ty)
  * [Lost Animals](http://bit.ly/2fhH2VA)
* [California](http://boundaries.latimes.com/sets/)
  * [U.S. Congressional Districts of California, 2011](http://boundaries.latimes.com/1.0/boundary-set/us-congressional-districts-2011/)
  * [State Senate Districts, 2011](http://s3-us-west-2.amazonaws.com/boundaries.latimes.com/archive/1.0/boundary-set/state-senate-districts-2011.json)
  * [State Assembly Districts, 2011](http://s3-us-west-2.amazonaws.com/boundaries.latimes.com/archive/1.0/boundary-set/state-assembly-districts-2011.json)
  * [State Secondary School Districts, 2012](http://s3-us-west-2.amazonaws.com/boundaries.latimes.com/archive/1.0/boundary-set/secondary-school-districts-2012.json)
* [County of Los Angeles](https://data.lacounty.gov/)
  * [Public Library Monthly Circulation](https://data.lacounty.gov/api/views/gf6j-sjun/rows.json?accessType=DOWNLOAD)
  * [Employee Salaries](https://data.lacounty.gov/api/views/8rdv-6nb6/rows.json?accessType=DOWNLOAD)
  * [Restaurants and Markets Violations](https://data.lacounty.gov/api/views/b9ey-v6ni/rows.json?accessType=DOWNLOAD)
  * [City Boundaries](https://data.lacounty.gov/api/views/pwvf-ktdq/rows.json?accessType=DOWNLOAD)
  * [ZIP Codes](https://data.lacounty.gov/api/views/dwvh-6kjy/rows.json?accessType=DOWNLOAD)
  * [Assessor Parcels Data](https://data.lacounty.gov/api/views/9trm-uz8i/rows.json?accessType=DOWNLOAD)
  * [Stolen Vehicles in the Last 12 Months](https://data.lacounty.gov/api/views/dctb-g4t5/rows.json?accessType=DOWNLOAD)
* [City of Los Angeles](https://data.lacity.org/)
  * [Building and Safety Permit Information](https://data.lacity.org/api/views/yv23-pmwf/rows.json?accessType=DOWNLOAD)
  * [Port of Los Angeles Tsunami Evacuation Routes & Signs](https://data.lacity.org/api/views/dhqa-6x54/rows.json?accessType=DOWNLOAD)
  * [City Budget Expenditures on Transportation](https://controllerdata.lacity.org/api/views/b22v-uk7s/rows.json?accessType=DOWNLOAD)
  * [Library - Performance Metrics](https://data.lacity.org/api/views/kkby-9hji/rows.json?accessType=DOWNLOAD)
  * [Immigration Workshops Event Calendar](https://data.lacity.org/api/views/vugs-2e9n/rows.json?accessType=DOWNLOAD)
  * [DWP Payroll](https://controllerdata.lacity.org/api/views/jmgf-hhk6/rows.json?accessType=DOWNLOAD)
* [City of Santa Monica](https://data.smgov.net/)
  * [Trees!](https://data.smgov.net/api/views/ekya-mi9c/rows.json?accessType=DOWNLOAD)
  * [City Wi-Fi Access Points](https://data.smgov.net/api/views/j485-ymdf/rows.json?accessType=DOWNLOAD)
  * [Library Patron Totals By Zip Code](https://data.smgov.net/api/views/uiah-8k3s/rows.json?accessType=DOWNLOAD)
  * [Santa Monica Airport Departures Log](https://data.smgov.net/api/views/jb23-x9zf/rows.json?accessType=DOWNLOAD)
  * [Maximum Allowable Rent Map](https://data.smgov.net/api/views/fzk2-ujpt/rows.json?accessType=DOWNLOAD)
  * [Historic Landmarks](https://data.smgov.net/api/views/qe7x-ueps/rows.json?accessType=DOWNLOAD)
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
  * [PMJDY Monthly Report](https://data.gov.in/node/739941/datastore/export/json)
  * [Gross Domestic Product at Current Prices](https://www.quandl.com/api/v1/datasets/MOSPI/GDP.json)
* [Australia](http://data.gov.au/)
  * [ABC Local Stations](http://data.gov.au/geoserver/abc-local-stations/wfs?request=GetFeature&typeName=ckan_d534c0e9_a9bf_487b_ac8f_b7877a09d162&outputFormat=json)
  * [Ballarat BBQ's](http://data.gov.au/dataset/f2ab58d7-18b7-44dc-9121-9cd0ae829d22/resource/8057e47e-967b-4e42-9451-06a8031133c8/download/ballaratbbqs.geojson)
  * [Boat Ramps in the Gold Coast Area](http://data.gov.au/geoserver/boat-ramps/wfs?request=GetFeature&typeName=af1b8d1c_a186_4e72_8e9e_549a8065e970&outputFormat=json)
  * [Indigenous Land Use Agreements (Registered or in Notification)](http://data.gov.au/geoserver/indigenous-land-use-agreements-registered-or-in-notification/wfs?request=GetFeature&typeName=ckan_9e837144_8070_4983_8bf0_15e7ceb56ed7&outputFormat=json)
  * [Noosa Wedding Locations](http://data.gov.au/geoserver/noosa-wedding-locations/wfs?request=GetFeature&typeName=17a54ec7_914b_4c60_b194_b0d190803001&outputFormat=json)
  * [NSW State Electoral Boundaries - PSMA Administrative Boundaries](http://data.gov.au/geoserver/nsw-state-electoral-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=8047ddd1_7193_4667_aef9_b75bc3076075&outputFormat=json)
  * [VIC Police Station Locations](http://data.gov.au/geoserver/police-station-locations/wfs?request=GetFeature&typeName=762b47b2_e706_4cab_b0c7_cf8e406aefc1&outputFormat=json)
* Amsterdam
  * [Shops](http://open.datapunt.amsterdam.nl/Shoppen.json)
  * [Food and Drinks](http://open.datapunt.amsterdam.nl/EtenDrinken.json)
  * [Museums and Galleries](http://open.datapunt.amsterdam.nl/MuseaGalleries.json)
* [Michigan](https://data.michigan.gov/browse)
  * [Car Accidents](https://data.michigan.gov/api/views/p54v-8v6s/rows.json?accessType=DOWNLOAD)
  * [Vehicle Type In Accidents](https://data.michigan.gov/api/views/bcct-6rxt/rows.json?accessType=DOWNLOAD)
  * [Schools](https://data.michigan.gov/api/views/7rph-su5f/rows.json?accessType=DOWNLOAD)
  * [Fish](https://data.michigan.gov/api/views/he9h-7fpa/rows.json?accessType=DOWNLOAD)
  * [State Facts](https://data.michigan.gov/api/views/pxdv-rgvb/rows.json?accessType=DOWNLOAD)
  * [Baby Names](https://data.michigan.gov/api/views/nndy-b6rm/rows.json?accessType=DOWNLOAD)
* UK
  * [National Statistics Postcode Lookup UK](https://opendata.camden.gov.uk/api/views/tr8t-gqz7/rows.json?accessType=DOWNLOAD)

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
* [stream](http://httpbin.org/stream/10) *(**Warning**: currently returning "Parse error on line 1".)*
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
* [Cost Savings](http://www.nasa.gov/digitalstrategy/costsavings.json)
* [Bureau Directory](http://www.nasa.gov/digitalstrategy/bureaudirectory.json)
* [Electric Arc Shock Tube (EAST) Test 52 Data](https://data.nasa.gov/api/views/eiwv-s7fe)
* [Realized Cost Savings and Avoidance Decisions](https://data.nasa.gov/api/views/jh9h-68aq)
* [NASA Educational Resources](https://data.nasa.gov/api/views/njat-edii)
* [ISS Expedition 01 Press Kit](https://data.nasa.gov/api/views/vdbj-basa)
* [ISS Current Location](http://api.open-notify.org/iss-now.json)
* [How Many People Are In Space Right Now](http://api.open-notify.org/astros.json)
* [Earth Meteorite Landings](https://data.nasa.gov/resource/y77d-th95.json)
* [Near-Earth Asteroids and Comets Discovered By NEOWISE](https://data.nasa.gov/resource/2vr3-k9wn.json)

> Find more NASA datasets [here](https://data.nasa.gov/data?category=&search=&type=href)

## Natural Disasters
* [Earthquakes](http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson)

## Nobel Prize
* [Prize](http://api.nobelprize.org/v1/prize.json)
* [Laureate](http://api.nobelprize.org/v1/laureate.json)
* [Country](http://api.nobelprize.org/v1/country.json)

## Node.js API
* [console](https://nodejs.org/api/console.json)
* [Crypto](https://nodejs.org/api/crypto.json)
* [Debugger](https://nodejs.org/api/debugger.json)
* [DNS](https://nodejs.org/api/dns.json)
* [Domain](https://nodejs.org/api/domain.json)
* [Events](https://nodejs.org/api/events.json)
* [File System](https://nodejs.org/api/fs.json)
* [global](https://nodejs.org/api/globals.json)
* [HTTP](https://nodejs.org/api/http.json)
* [HTTPS](https://nodejs.org/api/https.json)
* [Modules](https://nodejs.org/api/modules.json)
* [net](https://nodejs.org/api/net.json)
* [os](https://nodejs.org/api/os.json)
* [Path](https://nodejs.org/api/path.json)
* [process](https://nodejs.org/api/process.json)
* [punycode](https://nodejs.org/api/punycode.json)
* [Query String](https://nodejs.org/api/querystring.json)
* [Readline](https://nodejs.org/api/readline.json)
* [REPL](https://nodejs.org/api/repl.json)
* [Smalloc](https://nodejs.org/api/smalloc.json)
* [Stream](https://nodejs.org/api/stream.json)
* [StringDecoder](https://nodejs.org/api/string_decoder.json)
* [Timers](https://nodejs.org/api/timers.json)
* [TLS (SSL)](https://nodejs.org/api/tls.json)
* [TTY](https://nodejs.org/api/tty.json)
* [UDP / Datagram Sockets](https://nodejs.org/api/dgram.json)
* [URL](https://nodejs.org/api/url.json)
* [util](https://nodejs.org/api/util.json)
* [Executing JavaScript](https://nodejs.org/api/vm.json)
* [Zlib](https://nodejs.org/api/zlib.json)
* [Assert](https://nodejs.org/api/assert.json)
* [Buffer](https://nodejs.org/api/buffer.json)
* [Addons](https://nodejs.org/api/addons.json)
* [Child Process](https://nodejs.org/api/child_process.json)
* [Cluster](https://nodejs.org/api/cluster.json)

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
    * [Leipzig](http://statistik.leipzig.de/opendata/api/values?kategorie_nr=2&rubrik_nr=1&periode=y&format=json)
  * [Greece](http://api.population.io/1.0/population/Greece/today-and-tomorrow/)
  * [Italy](http://api.population.io/1.0/population/Italy/today-and-tomorrow/)
  * [Japan](http://api.population.io/1.0/population/Japan/today-and-tomorrow/)
  * [Kenya](http://api.population.io/1.0/population/Kenya/today-and-tomorrow/)
  * [Mexico](http://api.population.io/1.0/population/Mexico/today-and-tomorrow/)
  * [Poland](http://api.population.io/1.0/population/Poland/today-and-tomorrow/)
  * [Serbia](http://api.population.io/1.0/population/Serbia/today-and-tomorrow/)
  * [Colombia](http://api.population.io/1.0/population/Colombia/today-and-tomorrow/)
  * [Venezuela](http://api.population.io/1.0/population/RB-de-Venezuela/today-and-tomorrow/)
  * [India](http://api.population.io/1.0/population/India/today-and-tomorrow/)

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
  * [United States](http://api.worldbank.org/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json)
  * [China](http://api.worldbank.org/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json)
  * [India](http://api.worldbank.org/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json)

> Heads up: Use `cURL` to view raw `JSON` e.g.:
`$ curl -s http://api.population.io/1.0/countries | python -m json.tool`

* [United States Poverty Data](http://uspovertydata.com/povcal/api.php)

## GDP (current US$)
* [USA](http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)
* [China](http://api.worldbank.org/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)
* [India](http://api.worldbank.org/countries/IND/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json)

> Pro Tip: Link to country list [Here](http://api.worldbank.org/countries?per_page=304&format=json)

## Reddit
* [/r/all](http://www.reddit.com/r/all.json)
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
  * [SFO](http://services.faa.gov/airport/status/SFO?format=application/json)
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

* Metropolitan and Rural Transit Networks
  * Arriva Trains Wales (Cardiff, Wales): [Operator service area](https://transit.land/api/v1/operators/o-gcm-arrivatrainswales) / [Routes](https://transit.land/api/v1/routes?operated_by=o-gcm-arrivatrainswales) / [Stops](https://transit.land/api/v1/stops?served_by=o-gcm-arrivatrainswales)
  * Crossrail (London, England): [Operator service area](https://transit.land/api/v1/operators/o-u10j-crossrail) / [Routes](https://transit.land/api/v1/routes?operated_by=o-u10j-crossrail) / [Stops](https://transit.land/api/v1/stops?served_by=o-u10j-crossrail)
  * Dopravni podnik hl. m. Prahy, akciova spolecnost (Prague, Czech Republic): [Operator service area](https://transit.land/api/v1/operators/o-u2fk-dopravnipodnikhlmprahyakciovaspolecnost) / [Routes](https://transit.land/api/v1/routes?operated_by=o-u2fk-dopravnipodnikhlmprahyakciovaspolecnost) / [Stops](https://transit.land/api/v1/stops?served_by=o-u2fk-dopravnipodnikhlmprahyakciovaspolecnost)
  * Empresa Municipal de Transportes (Madrid, Spain): [Operator service area](https://transit.land/api/v1/operators/o-ezjm-empresamunicipaldetransportes) / [Routes](https://transit.land/api/v1/routes?operated_by=o-ezjm-empresamunicipaldetransportes) / [Stops](https://transit.land/api/v1/stops?served_by=o-ezjm-empresamunicipaldetransportes)
  * Helsingin seudun liikenne (Helsinki, Finland): [Operator service area](https://transit.land/api/v1/operators/o-ud9-helsinginseudunliikenne)
  * Los Angeles County Metropolitan Transportation Authority (Los Angeles, United States): [Operator service area](https://transit.land/api/v1/operators/o-9q5-metro~losangeles) / [Routes](https://transit.land/api/v1/routes?operated_by=o-9q5-metro~losangeles) / [Stops](https://transit.land/api/v1/stops?served_by=o-9q5-metro~losangeles)
  * Los Angeles Department of Transportation (Los Angeles, United States): [Operator service area](https://transit.land/api/v1/operators/o-9q5-ladot)
  * MTA New York City Transit (New York, United States): [Operator service area](https://transit.land/api/v1/operators/o-dr5r-nyct) / [Routes](https://transit.land/api/v1/routes?operated_by=o-dr5r-nyct) / [Stops](https://transit.land/api/v1/stops?served_by=o-dr5r-nyct)
  * New York City Department of Transportation (New York, United States): [Operator service area](https://transit.land/api/v1/operators/o-dr5r7-nycdot) / [Routes](https://transit.land/api/v1/routes?operated_by=o-dr5r7-nycdot) / [Stops](https://transit.land/api/v1/stops?served_by=o-dr5r7-nycdot)
  * Régie Autonome des Transports Parisiens (Paris, France): [Operator service area](https://transit.land/api/v1/operators/o-u09-ratp100) / [Routes](https://transit.land/api/v1/routes?operated_by=o-u09-ratp100) / [Stops](https://transit.land/api/v1/stops?served_by=o-u09-ratp100)
  * Ruter (Oslo, Norway): [Operator service area](https://transit.land/api/v1/operators/o-u4x-ruter) / [Routes](https://transit.land/api/v1/routes?operated_by=o-u4x-ruter) / [Stops](https://transit.land/api/v1/stops?served_by=o-u4x-ruter)
  * Thameslink (London, England): [Operator service area](https://transit.land/api/v1/operators/o-gcp-thameslink) / [Routes](https://transit.land/api/v1/routes?operated_by=o-gcp-thameslink) / [Stops](https://transit.land/api/v1/stops?served_by=o-gcp-thameslink)
  * Toronto Transit Comission (Toronto, Canada): [Operator service area](https://transit.land/api/v1/operators/o-dpz8-ttc) / [Routes](https://transit.land/api/v1/routes?operated_by=o-dpz8-ttc) / [Stops](https://transit.land/api/v1/stops?served_by=o-dpz8-ttc)

> Pro Tip: many more transit networks available [here](https://transit.land/feed-registry/)

* London Underground Tube Train Stations
  * [All stations](http://marquisdegeek.com/api/tube/)

## TV Shows
* [Girls (HBO)](http://api.tvmaze.com/singlesearch/shows?q=hbo&embed=episodes)
* [Dexter (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=dexter&embed=episodes)
* [Shameless (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=shameless&embed=episodes)
* [Mr. Robot (USA)](http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes)
* [Prison Break (FOX)](http://api.tvmaze.com/singlesearch/shows?q=prison-break&embed=episodes)
* [Gravity Falls (Disney XD)](http://api.tvmaze.com/singlesearch/shows?q=gravity-falls&embed=episodes)
* [Modern Family (ABC)](http://api.tvmaze.com/singlesearch/shows?q=modern-family&embed=episodes)
* [Ray Donovan (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=Ray-Donovan&embed=episodes)
* [Better Call Saul (AMC)](http://api.tvmaze.com/singlesearch/shows?q=better-call-saul&embed=episodes)
* [Homeland (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=Homeland&embed=episodes)
* [Silicon Valley (HBO)](http://api.tvmaze.com/singlesearch/shows?q=silicon-valley&embed=episodes)
* [Breaking Bad (AMC)](http://api.tvmaze.com/singlesearch/shows?q=breaking-bad&embed=episodes)
* [The Walking Dead (AMC)](http://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes)
* [South Park (Comedy Central)](http://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes)
* [Futurama (Comedy Central)](http://api.tvmaze.com/singlesearch/shows?q=Futurama&embed=episodes)
* [Game of Thrones (HBO)](http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes)
* [Lost (ABC)](http://api.tvmaze.com/singlesearch/shows?q=lost&embed=episodes)
* [24 (FOX)](http://api.tvmaze.com/singlesearch/shows?q=24&embed=episodes)
* [Prison Break (FOX)](http://api.tvmaze.com/singlesearch/shows?q=prison-break&embed=episodes)
* [House of Cards (Netflix)](http://api.tvmaze.com/singlesearch/shows?q=house-of-cards&embed=episodes)
* [Seinfeld (NBC)](http://api.tvmaze.com/singlesearch/shows?q=seinfeld&embed=episodes)
* [Gotham (FOX)](http://api.tvmaze.com/singlesearch/shows?q=gotham&embed=episodes)
* [Friends (NBC)](http://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes)
* [How I Met Your Mother (CBS)](http://api.tvmaze.com/singlesearch/shows?q=how-i-met-your-mother&embed=episodes)
* [Grey's Anatomy (ABC)](http://api.tvmaze.com/singlesearch/shows?q=greys-anatomy&embed=episodes)
* [The Flash (The CW)](http://api.tvmaze.com/singlesearch/shows?q=flash&embed=episodes)
* [Game Of Thrones (HBO)](http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes)
* [Arrow (The CW)](http://api.tvmaze.com/singlesearch/shows?q=arrow&embed=episodes)
* [Legends of Tommorow (The CW)](http://api.tvmaze.com/singlesearch/shows?q=legends-of-tomorrow&embed=episodes)
* [The Big Bang Theory (CBS)](http://api.tvmaze.com/singlesearch/shows?q=big-bang-theory&embed=episodes)
* [Friends (NBC)](http://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes)
* [The Flash (CW)](http://api.tvmaze.com/singlesearch/shows?q=flash&embed=episodes)
* [Arrow (CW)](http://api.tvmaze.com/singlesearch/shows?q=arrow&embed=episodes)
* [Supergirl (CW)](http://api.tvmaze.com/singlesearch/shows?q=supergirl&embed=episodes)
* [Quantico (ABC)](http://api.tvmaze.com/singlesearch/shows?q=quantico&embed=episodes)
* [Rick and Morty (Adult Swim)](http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes)

> Pro Tip: replace the field-value for a show not listed e.g. `shows?q=show-name`. More options [here](http://www.tvmaze.com/api)

## Movies
* [Movie Information](http://www.omdbapi.com/)
  * [The Dark Knight](http://www.omdbapi.com/?t=the+dark+knight&y=&plot=short&r=json)
  * [Titanic (1997)](http://www.omdbapi.com/?t=titanic&y=&plot=short&r=json)
  * [Good Will Hunting](http://www.omdbapi.com/?t=Good+will+hunting&y=&plot=short&r=json)
  * [Pink](http://www.omdbapi.com/?t=pink&y=&plot=short&r=json)
  * [M.S. Dhoni: The Untold Story](http://www.omdbapi.com/?t=M.S.+Dhoni%3A+The+Untold+Story&y=2016&plot=short&r=json)
  * [Rustom](http://www.omdbapi.com/?t=rustom&y=&plot=short&r=json)
  * [3 Idiots](http://www.omdbapi.com/?t=3%20idiots&y=&plot=short&r=json)
  * [Airlift](http://www.omdbapi.com/?t=airlift&y=&plot=short&r=json)
  * [Queen](http://www.omdbapi.com/?t=queen&y=&plot=short&r=json)
  * [Sultan](http://www.omdbapi.com/?t=sultan&y=&plot=short&r=json)
  * [Big Hero 6](http://www.omdbapi.com/?t=big%20hero&y=&plot=short&r=json)

> Pro Tip: replace the title value for a movie in the url. See [Omdbapi](http://www.omdbapi.com/) for more information.

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
* [Kuala Lumpur](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D"Kuala%20Lumpur"%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [New Delhi](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22New%20Delhi%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Mexico City](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Mexico%20City%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Tehran](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Tehran%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Mumbai](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Mumbai%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Cape Town](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Cape%20Town%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Madrid](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Madrid%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Buenos Aires](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Buenos%20Aires%2C%20CA%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Lucknow](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22nome%2C%20ak%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)
* [Leipzig (historical data)](http://statistik.leipzig.de/opendata/api/values?kategorie_nr=1&rubrik_nr=3&periode=y&format=json)
* [Firenze](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Firenze%2C%20ak%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)

> Pro Tip: generate URLs for any location at [Yahoo Weather API](https://developer.yahoo.com/weather/)

## Other
* [Wikidata](https://dumps.wikimedia.org/other/wikidata/) *Gigabytes of Gzipped JSON*
* [Industries](https://www.sajari.com/free-data/industries.json)
* [Hackerspaces](http://spaceapi.net/directory.json) *implementing the [Space API](http://spaceapi.net/)*
* [jService - 156,800 Trivia Questions](http://jservice.io/api/clues)
* [IP Geolocation](http://ip-api.com/json/8.8.8.8)
* [Zip Code to Province and District in Thailand](https://raw.githubusercontent.com/rathjung/Thai-zip-code-latitude-and-longitude/22f51dd4beb9117b76348527a1848058a690e43a/data.json)
* [Physical Therapy Exercises](https://git.drp.digital/careuk/careuk-pocket-physio-hybrid-app/raw/feature/final-exercise-data/src/data/exercises-structure.json)
* [Colleges](http://spencerfricke.com/data/college_full_data.json)
* [Esperanto Words Set](https://api.eo.kevineaton.net/random) *You can drop the /random to get the full list (~700k)*

## More Awesome Lists
* [Awesome](https://github.com/sindresorhus/awesome) *(The OG List)*
* [Help Wanted](https://github.com/jdorfman/awesome-help-wanted) *(Open Source projects looking for Help)*
* [JSON](https://github.com/burningtree/awesome-json) *(Libraries and Resources)*
* [WPO](https://github.com/davidsonfellipe/awesome-wpo) *(Web Performance Optimization)*
* [Shell](https://github.com/alebcay/awesome-shell) *(CLI Frameworks, Toolkits and Guides)*
* [Public APIs](https://github.com/toddmotto/public-apis) *(JSON APIs for use in web dev, some of which require authentication)*
* [Public Datasets](https://github.com/caesar0301/awesome-public-datasets) *(Datasets beyond just JSON)*
* [Style Guides](https://github.com/kciter/awesome-style-guide) *(Programming Languages, Platforms, Frameworks)*

## Contributing
If you want to contribute, please read the [contribution guidelines](CONTRIBUTING.md).

## License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [MaxCDN](https://www.maxcdn.com) has waived all copyright and related or neighboring rights to this work.
