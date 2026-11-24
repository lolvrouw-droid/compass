// EXAMPLE comments, invented for this workshop so the map feels alive (a prototyping trick: fake the crowd).
// They are NOT real reports. Each one is based on tags in the OpenStreetMap data (fee, wheelchair, access, opening hours...).
// Structure: { "lat,lon": [ { text, date } ] }, using the same id the map uses (lat and lon with 5 decimals).
const SEED_COMMENTS = {
 "52.00909,4.36397": [
  {
   "text": "Underground, and cash is not accepted here, so bring a card.",
   "date": "2026-09-12"
  },
  {
   "text": "Open around the clock, and wheelchair accessible.",
   "date": "2026-10-30"
  }
 ],
 "52.01145,4.36180": [
  {
   "text": "A retractable toilet: it only comes up out of the ground on special occasions.",
   "date": "2026-10-04"
  }
 ],
 "52.01198,4.36098": [
  {
   "text": "Costs 50 cents. On Sundays it only opens at 11:30.",
   "date": "2026-09-21"
  },
  {
   "text": "Wheelchair access is limited here, so check before you make the trip.",
   "date": "2026-11-14"
  }
 ],
 "51.99820,4.35388": [
  {
   "text": "There is a baby changing room, and it costs 50 cents. Closed on Sundays.",
   "date": "2026-10-08"
  }
 ],
 "52.00251,4.37519": [
  {
   "text": "Free, open until midnight, and there was soap and paper.",
   "date": "2026-10-19"
  }
 ],
 "52.00850,4.36960": [
  {
   "text": "Customers only. I felt awkward walking in without ordering anything.",
   "date": "2026-09-30"
  }
 ],
 "51.99660,4.35296": [
  {
   "text": "Customers only, so buy a coffee first.",
   "date": "2026-11-03"
  }
 ],
 "51.99703,4.35216": [
  {
   "text": "For customers, Monday to Saturday 10:00 to 17:00. Not an option on a Sunday.",
   "date": "2026-10-26"
  }
 ],
 "51.99012,4.37576": [
  {
   "text": "Unisex and designated for wheelchair users. Please leave it free for those who need it.",
   "date": "2026-11-09"
  }
 ],
 "52.00715,4.35645": [
  {
   "text": "Run by Gemeente Delft. The opening hours only say Mo-Fr, no times, so I did not know when to go.",
   "date": "2026-08-29"
  }
 ],
 "52.00891,4.36325": [
  {
   "text": "Unisex toilet with a baby changing table, on the first floor.",
   "date": "2026-10-16"
  }
 ],
 "52.01186,4.35757": [
  {
   "text": "Costs money and is not wheelchair accessible.",
   "date": "2026-08-18"
  }
 ]
};
