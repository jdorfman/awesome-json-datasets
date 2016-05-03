# Awesome JSON Datasets
A curated list of awesome JSON datasets that don't require authentication.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Build Status](https://travis-ci.org/jdorfman/awesome-json-datasets.svg)](https://travis-ci.org/jdorfman/awesome-json-datasets)

**Tip**: You can find simply press <kbd>Command</kbd> + <kbd>F</kbd> or <kbd>Ctrl</kbd> + <kbd>F</kbd> to search for a keyword.

## TOC
* [Bitcoin](#bitcoin)
* [Cars](#cars)
* [Crime](#crime)
* [Currency](#currency)
* [Gaming](#gaming)
* [GitHub API](#github-api)
* [Government](#government)
* [HTTP](#http)
* [Media](#media)
* [Node.js API](#nodejs-api)
* [Population](#population)
* [Reddit](#reddit)
* [Travel](#travel)
* [TV Shows](#tv-shows)
* [Weather](#weather)
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

## Gaming
* [BattleField 4](http://bf4stats.com/api)
  * [Online Players](http://api.bf4stats.com/api/onlinePlayers?output=json)

## GitHub API
* [Emojis](https://api.github.com/emojis)
* [Events](https://api.github.com/events)
* [Gists](https://api.github.com/gists)

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
  * [Zip Code to USEAC](http://developer.trade.gov/api/zip-code-to-useac.json)
  * [Business Service Providers](http://developer.trade.gov/api/business-service-providers.json)
  * [ITA Taxonomies](http://developer.trade.gov/api/ita-taxonomies.json)
* [DATA.NY.GOV](https://data.ny.gov/browse?limitTo=datasets&utf8=%E2%9C%93)
  * [Lottery Numbers](https://data.ny.gov/api/views/kwxv-fwze/rows.json?accessType=DOWNLOAD)
  * [Retail Food Stores](https://data.ny.gov/api/views/9a8c-vfzj/rows.json?accessType=DOWNLOAD)
  * [Child Care Programs](https://data.ny.gov/api/views/cb42-qumz/rows.json?accessType=DOWNLOAD)
  * [Mental Health Programs](https://data.ny.gov/api/views/6nvr-tbv8/rows.json?accessType=DOWNLOAD)
  * [Press Releases](https://data.ny.gov/api/views/n2k2-wzfz/rows.json?accessType=DOWNLOAD)
  * [Jobs by Industry](https://data.ny.gov/api/views/pxa9-czw8/rows.json?accessType=DOWNLOAD)
* USA.gov
  * [Corporate Consumer Contact Directory](https://www.usa.gov/api/USAGovAPI/corporate/contacts.json/contacts)
  * [Federal Agency Contact Directory](https://www.usa.gov/api/USAGovAPI/contacts.json/contacts)
    * [FBI](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49278)
    * [CIA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/52590)
    * [DEA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/52688)
    * [TSA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/48143)
    * [NSA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49546)
    * [DOJ](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/52686)
    * [DOD](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49229)
    * [FEMA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/48042)
    * [DHS](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49022)
    * [FDA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/48058)
    * [NASA](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49476)
    * [Secret Service](https://www.usa.gov/api/USAGovAPI/contacts.json/contact/49660)
  * Social Media Accounts
    * [USDA](http://registry.usa.gov/accounts.json?agency_id=usda)
    * [FBI](http://registry.usa.gov/accounts.json?agency_id=fbi)
    * [CIA](http://registry.usa.gov/accounts.json?agency_id=cia)
    * [NASA](http://registry.usa.gov/accounts.json?agency_id=nasa)
    * [FEMA](http://registry.usa.gov/accounts.json?agency_id=fema)
    * [DHS](http://registry.usa.gov/accounts.json?agency_id=dhs)
  * [Mobile Apps](http://apps.usa.gov/apps-gallery/api/galleries.json)
    * [FBI](http://apps.usa.gov/apps-gallery/api/registrations.json?Name=*FBI*)
    * [CIA](http://apps.usa.gov/apps-gallery/api/registrations.json?Name=*CIA*)
    * [NASA](http://apps.usa.gov/apps-gallery/api/registrations.json?Name=*NASA*)
    * [FEMA](http://apps.usa.gov/apps-gallery/api/registrations.json?Name=*FEMA*)
    * [TSA](http://apps.usa.gov/apps-gallery/api/registrations.json?Name=*TSA*)
* Department of Justice
  * [Blog Entries](http://www.justice.gov/api/v1/blog_entries.json?amp%3Bpagesize=2)
  * [Press Releases](http://www.justice.gov/api/v1/press_releases.json?pagesize=2)
  * [Speeches](http://www.justice.gov/api/v1/speeches.json?pagesize=2)
  * [Vacancy Announcements](http://www.justice.gov/api/v1/vacancy_announcements.json?pagesize=2)
* Parliament of Canada
  * [Bills](http://api.parliamentdata.ca/bills)
  * [Representatives](http://api.parliamentdata.ca/representatives)
  * [Committees](http://api.parliamentdata.ca/committees)

> Pro Tip: you can do **a lot** more at [http://parliamentdata.ca/](http://parliamentdata.ca/)

* EU Lobbying Transparency Register
  * [Country](http://api.lobbyfacts.eu/api/1/country)
  * [Entity](http://api.lobbyfacts.eu/api/1/entity)
  * [Representative](http://api.lobbyfacts.eu/api/1/representative)
  * [Person](http://api.lobbyfacts.eu/api/1/person)
  * [Category](http://api.lobbyfacts.eu/api/1/category)
  * [Financial](http://api.lobbyfacts.eu/api/1/financial_data)
  * [Accreditation](http://api.lobbyfacts.eu/api/1/accreditation)

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
  * [Serbia](http://api.population.io/1.0/population/Serbia/today-and-tomorrow/)

> Pro Tip: [List of all Countries](http://api.population.io/1.0/countries) tracked

* United States Population Table (Ages 0-100)
    * [1950](http://api.population.io/1.0/population/1950/United%20States/)
    * [1960](http://api.population.io/1.0/population/1960/United%20States/)
    * [1970](http://api.population.io/1.0/population/1970/United%20States/)
    * [1980](http://api.population.io/1.0/population/1980/United%20States/)
    * [1990](http://api.population.io/1.0/population/1990/United%20States/)
    * [2000](http://api.population.io/1.0/population/2000/United%20States/)
    * [2010](http://api.population.io/1.0/population/2010/United%20States/)

> Heads up: Use `cURL` to view raw `JSON` e.g.:
`$ curl -s http://api.population.io/1.0/countries | python -m json.tool`

* [United States Poverty Data](http://uspovertydata.com/povcal/api.php)

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

> Pro Tip: you can append `.json` to any subreddit url.

## Travel
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

## TV Shows
* [Girls (HBO)](http://api.tvmaze.com/singlesearch/shows?q=hbo&embed=episodes)
* [Dexter (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=dexter&embed=episodes)
* [Shameless (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=shameless&embed=episodes)
* [Mr. Robot (USA)](http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes)
* [Ray Donovan (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=Ray-Donovan&embed=episodes)
* [Better Call Saul (AMC)](http://api.tvmaze.com/singlesearch/shows?q=better-call-saul&embed=episodes)
* [Homeland (Showtime)](http://api.tvmaze.com/singlesearch/shows?q=Homeland&embed=episodes)
* [Silicon Valley (HBO)](http://api.tvmaze.com/singlesearch/shows?q=silicon-valley&embed=episodes)
* [Breaking Bad (AMC)](http://api.tvmaze.com/singlesearch/shows?q=breaking-bad&embed=episodes)
* [The Walking Dead (AMC)](http://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes)
* [South Park (Comedy Central)](http://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes)
* [Futurama (Comedy Central)](http://api.tvmaze.com/singlesearch/shows?q=Futurama&embed=episodes)

> Pro Tip: replace the field-value for a show not listed e.g. `shows?q=show-name`. More options [here](http://www.tvmaze.com/api)

## Weather
* [Los Angeles](http://api.openweathermap.org/data/2.5/weather?q=Los_Angeles)
* [New York](http://api.openweathermap.org/data/2.5/weather?q=New_York)
* [Atlanta](http://api.openweathermap.org/data/2.5/weather?q=Atlanta)
* [Chicago](http://api.openweathermap.org/data/2.5/weather?q=chicago)
* [Miami](http://api.openweathermap.org/data/2.5/weather?q=miami)
* [San Francisco](http://api.openweathermap.org/data/2.5/weather?q=San_Francisco)
* [Charleston](http://api.openweathermap.org/data/2.5/weather?q=Charleston)
* [Las Vegas](http://api.openweathermap.org/data/2.5/weather?q=Las_Vegas)
* [Seattle](http://api.openweathermap.org/data/2.5/weather?q=Seattle)
* [Washington DC](http://api.openweathermap.org/data/2.5/weather?q=Washington_DC)
* [New Orleans](http://api.openweathermap.org/data/2.5/weather?q=New_Orleans)
* [Louisville](http://api.openweathermap.org/data/2.5/weather?q=Louisville)
* [Portland](http://api.openweathermap.org/data/2.5/weather?q=Portland)
* [Ashburn](http://api.openweathermap.org/data/2.5/weather?q=Ashburn)
* [Nashville](http://api.openweathermap.org/data/2.5/weather?q=Nashville)
* [Austin](http://api.openweathermap.org/data/2.5/weather?q=Austin)
* [Saint Louis](http://api.openweathermap.org/data/2.5/weather?q=Saint_Louis)
* [Sedona](http://api.openweathermap.org/data/2.5/weather?q=Sedona)
* [Honolulu](http://api.openweathermap.org/data/2.5/weather?q=Honolulu)
* [Branson](http://api.openweathermap.org/data/2.5/weather?q=Branson)
* [Boston](http://api.openweathermap.org/data/2.5/weather?q=Boston)
* [Savannah](http://api.openweathermap.org/data/2.5/weather?q=Savannah)
* [Orlando](http://api.openweathermap.org/data/2.5/weather?q=Orlando)
* [Lahaina](http://api.openweathermap.org/data/2.5/weather?q=Lahaina)
* [Saint Augustine](http://api.openweathermap.org/data/2.5/weather?q=Saint_Augustine)
* [San Antonio](http://api.openweathermap.org/data/2.5/weather?q=San_Antonio)
* [Dallas](http://api.openweathermap.org/data/2.5/weather?q=Dallas)

> Pro Tip: replace the field-value for a city not listed e.g. `weather?q=city_name`.

## More Awesome Lists
* [Awesome](https://github.com/sindresorhus/awesome) *(The OG List)*
* [JSON](https://github.com/burningtree/awesome-json) (Libraries and Resources)
* [WPO](https://github.com/davidsonfellipe/awesome-wpo) *(Web Performance Optimization)*
* [Shell](https://github.com/alebcay/awesome-shell) *(CLI Frameworks, Toolkits and Guides)*
* [Public Datasets](https://github.com/caesar0301/awesome-public-datasets) *(Datasets beyond just JSON)*
* [Style Guides](https://github.com/kciter/awesome-style-guide) *(Programming Languages, Platforms, Frameworks)*

## Contributing
If you want to contribute, please read the [contribution guidelines](CONTRIBUTING.md).

## License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [MaxCDN](https://www.maxcdn.com) has waived all copyright and related or neighboring rights to this work.
