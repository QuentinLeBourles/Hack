<?php
/**
 * Created by PhpStorm.
 * User: quentin & damien
 * Date: 06/11/18
 * Time: 18:20
 */
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
    header("Content-Type: application/json; charset=UTF-8");
    echo($_POST['file']);
    if (($handle = fopen("data.csv", "r")) !== FALSE) {
        $rows = [];
        while (!feof($handle)) {
            $rows[] = fgetcsv($handle, 4000, ',');
        }
        $data = [];
        $headers = [];
        foreach ($rows[0] as $row) {
            $headers[] = $row;
        }
        foreach ($rows as $key => $csv) {
            if ($key === 0) {
                continue;
            }
            foreach ($headers as $column_key => $header) {
                $data[$key - 1][$header] = $csv[$column_key];
            }
        }
        $json = json_encode($data);
        fclose($handle);
        return "[{'test': 'toto'}]";
    }