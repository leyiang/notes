# File Api

## Get all files under folder
```php
$files = glob("*");
```

```php
$files = array_diff( scandir(__DIR__), [".", ".."]);
$current_script = basename(__FILE__);
```

```php
$list = [];
$folder = dir(__DIR__);

while(false !== ($name = $folder->read())) {
    if( ! in_array($name, [".", ".."]) ) {
        $list[] = $name;
    }
}
```

## Get File By Specific Name
```php
// *.php
$files = glob("./*.php");

$folders = array_filter(glob("./*"), "is_dir");
```

```php
$list = array_filter(scandir(__DIR__), function($name) {
    $info = pathinfo($name);
    return @$info["extension"] === "php";
});
```

```php
$list = array_filter(scandir(__DIR__), function($name) {
    $index = strrpos($name, ".php");
    if( ! is_file($name) ) return false;
    return strrpos($name, ".php") !== false;
});
```

## Move Path with (\.\.)
```php
$path = dirname(__PATH__);
```

```php
realpath(__DIR__ . '/../../../');
```

## Get Current Path
```php
$pwd = getcwd();
```

> getcwd() returns the path of the "main" script referenced in the URL.
dirname(\_\_FILE\_\_) will return the path of the script currently executing.

```php
$pwd = dirname(__FILE__);
```

## Get Current Script Name
```php
$name = basename(__FILE__);
```

```php
$name = pathinfo(__FILE__)["basename"];
```

## Get File Extension
```php
$ext = pathinfo( $file )["extension"];
$ext = pathinfo( $file, PATHINFO_EXTENSION );
```

```php
$name = "config.inc.php";
$index = strrpos($name, ".");

if( $index === false ) {
    // No Extension
}

$ext = substr($name, $index + 1); // +1 to exclude the . 
```

```php
/**
Not a good approach
IF $name without a dot 
Like 'abc', the result will be 'abc'
**/
$name = "config.inc.php";
$tmp = explode(".", $name);
$ext = end($tmp); //php
```

## Output File Directly into Browser
If you want to show a image directly:
```php
$name = "./image.jpeg";

header("Content-Type: image/jpeg");

// Method 1
echo file_get_contents($name);

// Method 2
$fp = fopen($name, "r");
echo fread($fp, filesize($fp));

// Method 3
fpassthru( $fp );
```

If you want to show text in browser:
```php
header("Content-Type: text/plain");
echo file_get_contents( $name );
```

If you wont the browser to download
```php
header("Content-Disposition: inline; filename=test.csv");
header("Content-Type: application/csv");

// and then `echo` or `fpassthru`
```

Download a CSV
```php
$data = [
    ["title", "name", "addr"],
    ["1", "sco", "123"],
    ["1", "sco", "123"],
    ["1", "sco", "123"]
];

header("Content-Disposition: inline; filename=test.csv");
header("Content-Type: application/csv");

$tmp = join("\n", array_map(function($row) {
    return join(",", $row);
}, $data ));

echo $tmp;
```
