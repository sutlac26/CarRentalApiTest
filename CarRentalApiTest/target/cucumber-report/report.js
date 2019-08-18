$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/app/features/Q1_printBlueTeslaWithNotes.feature");
formatter.feature({
  "name": "As a user I want to see same model and color selections in the database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a user I want to see same model and color selections in the database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.step({
  "name": "User can call car rental api to see \u003cmake\u003e \u003ccolor\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify user can see \u003cmake\u003e \u003ccolor\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify user can see detail notes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "make",
        "color"
      ]
    },
    {
      "cells": [
        "\"Tesla\"",
        "\"Blue\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to see same model and color selections in the database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_gets_request_from_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can call car rental api to see \"Tesla\" \"Blue\"",
  "keyword": "When "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_can_call_car_rental_api_to_see(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user can see \"Tesla\" \"Blue\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.verify_user_can_see(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user can see detail notes",
  "keyword": "Then "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.verify_user_can_see_detail_notes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/app/features/Q2_LowestRentalCar.feature");
formatter.feature({
  "name": "Lowest Rental Car",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to see which car has lowest price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_gets_request_from_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code is 200 from Response",
  "keyword": "And "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.status_code_is_from_Response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user can see lowest car per day",
  "keyword": "Then "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.verify_user_can_see_lowest_car_per_day()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I want to see which car has lowest price after discount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_gets_request_from_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code is 200 from Response",
  "keyword": "And "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.status_code_is_from_Response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify User can see lowest car per day after discount",
  "keyword": "Then "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.verify_User_can_see_lowest_car_per_day_after_discount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/app/features/Q3_RentACarRevenue.feature");
formatter.feature({
  "name": "Highest Profit Car",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to see which car has a biggest revenue per year to date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_gets_request_from_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code is 200 from Response",
  "keyword": "And "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.status_code_is_from_Response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user can see revenues for each car",
  "keyword": "Then "
});
formatter.match({
  "location": "Q3_RentACarRevenueStepDef.verify_user_can_see_revenues_for_each_car()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I want to see which car has a biggest profit per year to date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets request from url",
  "keyword": "Given "
});
formatter.match({
  "location": "Q1_PrintBlueTeslaWithNotes_step_definition.user_gets_request_from_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code is 200 from Response",
  "keyword": "And "
});
formatter.match({
  "location": "Q2_LowestRentalCar_Step_Definitions.status_code_is_from_Response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify User can see see car profits in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Q3_RentACarRevenueStepDef.verify_User_can_see_see_car_profits_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});