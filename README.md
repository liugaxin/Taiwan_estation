# Taiwan Estation 2019不動產房價趨勢分析

![image](https://github.com/liugaxin/Taiwan_estation/blob/master/Emp_Taiwan.png)

## 資料收集

- 民國103~108年來19縣市房屋實價登錄資料(不包含離島)
- 原始資料270萬筆
- 六都資料160萬筆

## 資料清理

- 新增欄位/轉換欄位/去除無價值欄位/撰寫Python程式自動化清理文件，MariaDB操作(CRUD)
- 縣市別
- 鄉鎮市區
- 交易標的
- 土地區段位置建物區段門牌
- 都市土地使用分區
- 交易筆棟數
- 移轉層次
- 總樓層數
- 建物型態
- 主要用途
- 主要建材
- 建物現況格局-房
- 建物現況格局-廳
- 建物現況格局-衛
- 建物現況格局-隔間
- 有無管理組織
- 總價元
- 車位類別
- 交易日期西元
- 建築完成日期西元
- 建物移轉坪數
- 土地移轉坪數
- 每坪成交價
- 屋齡

## 數據分析

- 使用Statistic, DL, ML方法解決問題達成目標

## 基礎建設(地端) 

- 安裝伺服器版本ubuntu並使其可運行DT平台，DT相關參數權限設定

## 基礎建設(雲端) 

- 進行混和雲設定，Golang撰寫Backend，K8s與HBase Phoenix架構設計

## 視覺化 

- 將分析結果以圖表呈現並加入RWD功能，以Python撰寫Backend並取DB

## 功能說明

- [2012年-2019年房價、股市與國民所得] 由平均房價、股市、國民所得
- [2012年-2019年六都趨勢圖] 台北市、新北市、桃園市、台中市、台南市、高雄市
- [2012年-2019年四種標的平均房價變化] 店面、透天厝、大樓、套房

![image](https://github.com/liugaxin/Taiwan_estation/blob/master/Emp_Taipei.png)
![image](https://github.com/liugaxin/Taiwan_estation/blob/master/Emp_House_Stock_Salary.png)

## Link
https://liugaxin.github.io/Taiwan_estation/
