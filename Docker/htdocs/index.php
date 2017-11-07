<?php


$ip = '90.177.65.221';
$username = 'WEB';
$password = 'KotelC27!';

// NAÄTENÃ VENKOVNÃ TEPLOTY
$url = 'http://'.$ip.'/HMI00028.cgi';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERPWD, $username.':'.$password);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_COOKIEFILE, "cookie.txt");
curl_setopt($ch, CURLOPT_COOKIEJAR, "cookie.txt");
$remote = curl_exec ($ch);
curl_close ($ch);

preg_match('/<span id="o009" sz=5>(.*?)<\/span>/si', $remote, $b9);

echo 'Aktuální venkovní teplota: '.trim($b9[1]).'<br>';

date_default_timezone_set("Europe/Prague");
//echo "The time is " . date("h:i:sa");

echo "Dnes je: ".date('d-m-Y H:i:s');
echo "<br>"; 

$datum_cas = date('Y-m-d H:i:s');


// NAÄTENÃ VNITRNI TEPLOTY
$url = 'http://'.$ip.'/HMI00028.cgi';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERPWD, $username.':'.$password);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_COOKIEFILE, "cookie.txt");
curl_setopt($ch, CURLOPT_COOKIEJAR, "cookie.txt");
$remote = curl_exec ($ch);
curl_close ($ch);

preg_match('/<span id="o063" sz=5>(.*?)<\/span>/si', $remote, $a6);


echo '<b>'.'Aktuální vnitrni teplota: '.trim($a6[1]).'<br>';
echo '<HR>';
echo '<H3>'.'Kotel Benekov C27'.'</H3>';



$user = "root";
$pwd = "root";

try {
    $connection = new PDO("mysql:host=db;dbname=id724433_db_kotel", $user, $pwd);
    // PDO can throw exceptions rather than Fatal errors, so let's change the error mode to exception
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connection successful"; 
    date_default_timezone_set('Europe/Warsaw');
    //date_default_ti­mezone_set("E­urope/Prague");
 
///prumerne teploty 
  echo('<h2>Tabulka průměrných dennich teplot za poslednich 30 dní</h2><table border="1">');
  echo "<tr><th>Teplota venku</th><th>Teplota v domě</th><th>Spotřeba(den/kg)</th><th>Datum a Čas</th></tr>";
 
  foreach($connection->query('SELECT * 
FROM prum_teploty LIMIT 30') as $row) {


    $Tep_Ven = $row['ROUND(AVG(kt.Tep_Ven),1)'];
    $Tep_Uvnitr = $row['ROUND(AVG(kt.Tep_Uvnitr),1)'];
    $Den_Spotreba = $row['CAST(DEN_Spotreba AS DECIMAL(10,1))'];

   $Datum_Cas = $row['date(Datum_Cas)'];
    $c_datum =date("d.m.Y", strtotime($Datum_Cas));
    echo "<tr><td>".$Tep_Ven."</td><td>".$Tep_Uvnitr."</td><td>".$Den_Spotreba."</td><td>".$c_datum."</td></tr>";
} 
echo "</table>";


// max a min teploty
echo('<h2>Max a Min teploty</h2><table border="1">');
echo "<tr><th>Max. Teplota venku:</th><th>Datum a cas:</th></tr>";



foreach($connection->query('SELECT Tep_Ven, Datum_Cas 
FROM Kotel_Teploty
WHERE Tep_Ven = (SELECT(MAX(CAST(Tep_Ven AS DECIMAL(10,1)))) FROM Kotel_Teploty)') as $row) {



  $Max_Tep_Ven = $row['Tep_Ven'];
 
  $Datum_Cas = $row['Datum_Cas'];
  $c_datum =date("d.m.Y H:i:s", strtotime($Datum_Cas));
  echo "<tr><td>".$Max_Tep_Ven."</td><td>".$c_datum."</td></tr>";
} 






echo "<tr><th>Min. Teplota venku:</th><th>Datum a cas:</th></tr>";

foreach($connection->query('SELECT Tep_Ven, Datum_Cas 
FROM Kotel_Teploty
WHERE Tep_Ven = (SELECT(MIN(CAST(Tep_Ven AS DECIMAL(10,1)))) FROM Kotel_Teploty)') as $row) {


  $Min_Tep_Ven = $row['Tep_Ven'];
 
  $Datum_Cas = $row['Datum_Cas'];
  $c_datum =date("d.m.Y H:i:s", strtotime($Datum_Cas));
  echo "<tr><td>".$Min_Tep_Ven."</td><td>".$c_datum."</td></tr>";
} 

echo "<tr><th>Max. Teplota uvnitr:</th><th>Datum a cas:</th></tr>";



foreach($connection->query('SELECT Tep_Uvnitr, Datum_Cas 
FROM Kotel_Teploty
WHERE Tep_Uvnitr = (SELECT(MAX(CAST(Tep_Uvnitr AS DECIMAL(10,1)))) FROM Kotel_Teploty)') as $row) {


  $Max_Tep_Uvnitr = $row['Tep_Uvnitr'];
 
  $Datum_Cas = $row['Datum_Cas'];
  $c_datum =date("d.m.Y H:i:s", strtotime($Datum_Cas));
  echo "<tr><td>".$Max_Tep_Uvnitr."</td><td>".$c_datum."</td></tr>";
} 


echo "<tr><th>Min. Teplota uvnitr:</th><th>Datum a cas:</th></tr>";




foreach($connection->query('SELECT Tep_Uvnitr, Datum_Cas 
FROM Kotel_Teploty
WHERE Tep_Uvnitr = (SELECT(MIN(CAST(Tep_Uvnitr AS DECIMAL(10,1)))) FROM Kotel_Teploty)') as $row) {


  $Min_Tep_Uvnitr = $row['Tep_Uvnitr'];
 
  $Datum_Cas = $row['Datum_Cas'];
  $c_datum =date("d.m.Y H:i:s", strtotime($Datum_Cas));
  echo "<tr><td>".$Min_Tep_Uvnitr."</td><td>".$c_datum."</td></tr>";
} 



echo "</table>";




  }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


//?>