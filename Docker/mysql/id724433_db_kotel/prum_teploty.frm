TYPE=VIEW
query=select cast(`kt`.`Datum_Cas` as date) AS `datum`,round(avg(`kt`.`Tep_Ven`),1) AS `p_tep_ven`,round(avg(`kt`.`Tep_Uvnitr`),1) AS `p_tep_uvnitr`,cast(`kd`.`DEN_Spotreba` as decimal(10,1)) AS `den_spotreba` from (`id724433_db_kotel`.`kotel_teploty` `kt` join `id724433_db_kotel`.`kotel_data` `kd` on((`kd`.`Datum` = cast(`kt`.`Datum_Cas` as date)))) group by cast(`kt`.`Datum_Cas` as date) order by `kt`.`Datum_Cas` desc
md5=222ce29f6fd86a16e32ad88b5baaa4a6
updatable=0
algorithm=0
definer_user=root
definer_host=%
suid=2
with_check_option=0
timestamp=2017-10-05 07:22:12
create-version=2
source=SELECT date(Datum_Cas), ROUND(AVG(kt.Tep_Ven),1), ROUND(AVG(kt.Tep_Uvnitr),1), CAST(DEN_Spotreba AS DECIMAL(10,1))\nFROM Kotel_Teploty kt\nINNER JOIN Kotel_Data kd ON kd.Datum = date(kt.Datum_Cas)\ngroup by date(kt.Datum_Cas)\nORDER BY kt.Datum_Cas DESC
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_unicode_ci
view_body_utf8=select cast(`kt`.`Datum_Cas` as date) AS `datum`,round(avg(`kt`.`Tep_Ven`),1) AS `p_tep_ven`,round(avg(`kt`.`Tep_Uvnitr`),1) AS `p_tep_uvnitr`,cast(`kd`.`DEN_Spotreba` as decimal(10,1)) AS `den_spotreba` from (`id724433_db_kotel`.`kotel_teploty` `kt` join `id724433_db_kotel`.`kotel_data` `kd` on((`kd`.`Datum` = cast(`kt`.`Datum_Cas` as date)))) group by cast(`kt`.`Datum_Cas` as date) order by `kt`.`Datum_Cas` desc
mariadb-version=100122
