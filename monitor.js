
$(document).ready(function() {

    divs = $(".text-block .info-box")

    divs.each(function() {

        price_div = $(this).find(".price")
        bedroom_div = $(this).find(".info li:contains('Bed')")

        // Set default bedroom number
        beds = 1

        beds_string = $.trim($(bedroom_div).text()).split(" ")[0]
        if  (beds_string) { beds = parseInt(beds_string) }

        price_string = $(price_div).text().split(" ")[0]
        price = parseInt(price_string.replace("€","").replace(",",""))

        per_person = Math.round(price/beds)

        per_person_string = " (€"+per_person+" p/p)"
        per_person_div = $("<span>", {class: "per_person"})

        price_div.append(per_person_div)
        per_person_div.html(per_person_string)

    })

})