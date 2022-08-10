# Date Time

## How to Get Current Date?
```php
// Format a Unix Timestamp
$date = date("Y-m-d H:i:s"); //2022-08-07 09:47:33
```

```php
$date = new DateTime(); // First parameter is "now" by default
$date->format("Y-m-d H:i:s");

$date = date_create(); // It returns a DateTime instance
$date->format("Y-m-d H:i:s");
```

## How to set timezone?
```php
date_default_timezone_set("Asia/Shanghai");
```

If you need to work with multiple timezones:
```php
$ChinaTimezone = new DateTimeZone("Asia/Shanghai");
$KoreaTimezone = new DateTimeZone("Asia/Seoul");

$cTime = new DateTime("now", $ChinaTimezone);
$kTime = new DateTime("now", $KoreaTimezone);

// Also Works
$kTime->setTimezone( $ChinaTimezone );
```

## What's Korean's Timezone?
```php
$timezone = "Asia/Seoul";

// Use below function to get supported timezone list if your fogot
timezone_identifiers_list(); //array
```

## How to set date, and time separately
DateTime::setDate()
```php
$date = date_create();
$date->setDate("2022-10-01");

// If you have overflow in month and date, it will carry
$date->setDate(2022, 13, 1); // 2023-01-01
// 2022-08 has 31 days
$date->setDate(2022, 8, 32); // 2022-09-01
// Or Go Back
$date->setDate(2022, 8, 0); // 2022-07-31
```

DateTime::setTime() share similar rules
```php
$date = date_create();
$date->setTime(24, 0, 0); // date will carry 1
$date->setTime(10, 1, -1); // time will be: 10:00:59
$date->setTime(10, 0, -1); // time will be: 09:59:59
```

## How to Get how many days are in specific Month?
**Best Approach**
```php
// `t` in format means: Number of days in the given month
$days = date("t"); // Days in current month

$date = new DateTime("2022-02-07");
$days = $date->format("t"); // Days in specific month

// DateTime is part of PHP core, no installation required
```

```php
// Not so good
// Only if you forgot all other methods
// It's same with how js get days, so easier to memorize
$date = date_create();

$date->setDate(
    $date->format("Y"),
    $date->format("m"),
    0
);

$days = (int)$date->format("d");
```

```php
// cal_days_in_month($calendary, $month, $year);
$days = cal_days_in_month(CAL_GREGORIAN, 2, 2022);

// If use this one, need to test it
// This function requires PHP compilation with --enable-calendar
```

## How to Get Week Number in specific date?
```php
$date = date_create();
$date->format("D"); // Return Week Abbrv: Sat, Sun, Mon
$date->format("l"); // lower case L, return: Saturday, Sunday, Monday
$date->format("N"); // return: 1 (for monday), ... , 7 (for sunday)
$date->format("w"); // return: 0 (for monday), ... , 6 (for sunday)
```

## Get Month name
```php
$date = date_create();
$date->format("F"); // Full name: January through December
$date->format("M"); // Abbr name: Jan through Dec
```

## How to get timestamp by given DateTime object?
*There's no timezone info inside timestamp*
```php
$timestamp = strtotime("2022-08-07 10:48:51");
```

```php
$date = date_create();
$timestamp = $date->getTimestamp();
```

## How to create a date by string?
```
$date = date_create("2022-08-08");
$date = new DateTime("2022-08-08");
```

## Date addition, subtraction
Get Date Interval Between Two dates
```php
$today = date_create();
$eventDate = date_create("2022-10-10 20:00");
$diff = date_diff( $today, $eventDate );
$str = $diff->format("%Y %m %d"); //format character has to has % prefix
```


Addition
```php
$date = date_create();
$date->modify("+ 2day");
$date->modify("+ 2 month");
```

```php
// Y => Year, M => Month, D => Date, W => Week
// H => Hour, M => Minute, S => Second
// Interval Start with P
// Time Start With T (no exceptions)
// 2 days 1 hour will be: P2DT1H
// Period must state from largest scale to smallest scale
// So 1 year and 2 days should be: P1Y2D
// This is incorrect: P2D1Y
$interval = new DateInterval("P2D");
// Or Maybe => $interval = DateInterval::createFromDateString("2 days");
$date = date_create();
$date->add( $interval ); // same time at the day after tomorrow
```

Subtraction
```php
$date = date_create();
$date->modify("- 2day");
$date->modify("- 2 month");
```

```php
$interval = new DateInterval("P2D");
$date = date_create();
$date->sub( $interval );
```
