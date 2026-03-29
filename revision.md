# NIST SP 800-53 Revision 5 — 完整控制項詳細清單

> **版本**: Revision 5, Update 1  
> **發布日期**: 2020-09-23（更新 2020-12-10）  
> **控制家族數**: 20 個 ｜ **基礎控制項**: ~324 個 ｜ **含增強項總計**: ~1,196 個  
> **基線等級**: L = Low ｜ M = Moderate ｜ H = High ｜ P = Privacy  
> **參考來源**: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final

---

## 索引（Index）

| # | 代碼 | 控制家族 | 基礎控制項數 | 頁內錨點 |
|---|------|---------|------------|---------|
| 1 | AC | [Access Control（存取控制）](#ac--access-control存取控制) | 23 |
| 2 | AT | [Awareness and Training（安全意識與訓練）](#at--awareness-and-training安全意識與訓練) | 5 |
| 3 | AU | [Audit and Accountability（稽核與問責）](#au--audit-and-accountability稽核與問責) | 15 |
| 4 | CA | [Assessment, Authorization, and Monitoring（評估、授權與監控）](#ca--assessment-authorization-and-monitoring評估授權與監控) | 8 |
| 5 | CM | [Configuration Management（組態管理）](#cm--configuration-management組態管理) | 14 |
| 6 | CP | [Contingency Planning（應變計畫）](#cp--contingency-planning應變計畫) | 12 |
| 7 | IA | [Identification and Authentication（識別與鑑別）](#ia--identification-and-authentication識別與鑑別) | 12 |
| 8 | IR | [Incident Response（事件回應）](#ir--incident-response事件回應) | 10 |
| 9 | MA | [Maintenance（維護）](#ma--maintenance維護) | 7 |
| 10 | MP | [Media Protection（媒體保護）](#mp--media-protection媒體保護) | 8 |
| 11 | PE | [Physical and Environmental Protection（實體與環境保護）](#pe--physical-and-environmental-protection實體與環境保護) | 22 |
| 12 | PL | [Planning（規劃）](#pl--planning規劃) | 8 |
| 13 | PM | [Program Management（計畫管理）](#pm--program-management計畫管理) | 32 |
| 14 | PS | [Personnel Security（人員安全）](#ps--personnel-security人員安全) | 9 |
| 15 | PT | [PII Processing and Transparency（個資處理與透明度）](#pt--pii-processing-and-transparency個資處理與透明度) | 8 |
| 16 | RA | [Risk Assessment（風險評估）](#ra--risk-assessment風險評估) | 10 |
| 17 | SA | [System and Services Acquisition（系統與服務取得）](#sa--system-and-services-acquisition系統與服務取得) | 17 |
| 18 | SC | [System and Communications Protection（系統與通訊保護）](#sc--system-and-communications-protection系統與通訊保護) | 51 |
| 19 | SI | [System and Information Integrity（系統與資訊完整性）](#si--system-and-information-integrity系統與資訊完整性) | 22 |
| 20 | SR | [Supply Chain Risk Management（供應鏈風險管理）](#sr--supply-chain-risk-management供應鏈風險管理) | 12 |

---

## AC — Access Control（存取控制）

管控系統存取權限，包含帳號管理、存取執行、最小權限、遠端存取、無線存取、行動裝置等控制機制。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| AC-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達存取控制政策與程序，涵蓋目的、範圍、角色、職責、管理承諾、組織實體間之協調及合規性。 |
| AC-2 | Account Management（帳號管理） | L M H | 定義允許與禁止之帳號類型；指派帳號管理員；要求群組與角色成員資格之前提條件；授權使用者、群組、角色及存取授權。 |
| AC-3 | Access Enforcement（存取強制執行） | L M H | 依據適用之存取控制政策，強制執行對資訊與系統資源之已核准邏輯存取授權。 |
| AC-4 | Information Flow Enforcement（資訊流控制） | M H | 依據組織定義之資訊流控制政策，強制執行系統內部及連接系統間之已核准資訊流授權。 |
| AC-5 | Separation of Duties（職責分離） | M H | 識別並記錄需要分離之職責；定義系統存取授權以支援職責分離。 |
| AC-6 | Least Privilege（最小權限） | M H | 採用最小權限原則，僅允許使用者（或代表使用者行事之行程）執行組織任務所必需之已授權存取。 |
| AC-7 | Unsuccessful Logon Attempts（登入失敗嘗試） | L M H | 在特定時間內限制連續無效登入嘗試次數；自動鎖定帳號/節點、延遲下次登入提示，或依組織定義採取行動。 |
| AC-8 | System Use Notification（系統使用通知） | L M H | 在授予系統存取前向使用者顯示系統使用通知，提供與適用法律一致之隱私與安全告知。 |
| AC-9 | Previous Logon Notification（先前登入通知） | — | 成功登入系統時通知使用者上次登入的日期與時間。 |
| AC-10 | Concurrent Session Control（並行工作階段控制） | H | 限制每個帳號/帳號類型之並行工作階段數量。 |
| AC-11 | Device Lock（裝置鎖定） | M H | 在閒置指定時間後啟動裝置鎖定或要求使用者主動鎖定；保持鎖定直到使用者透過識別與鑑別程序重新建立存取。 |
| AC-12 | Session Termination（工作階段終止） | M H | 在組織定義之條件或觸發事件發生後，自動終止使用者工作階段。 |
| AC-14 | Permitted Actions Without Identification or Authentication（無需識別或鑑別之允許動作） | L M H | 識別可在無需識別或鑑別下對系統執行的使用者動作；在安全計畫中記錄並提供支持理由。 |
| AC-16 | Security and Privacy Attributes（安全與隱私屬性） | — | 提供將安全與隱私屬性與屬性值相關聯之方法，適用於儲存中、處理中及/或傳輸中之資訊。 |
| AC-17 | Remote Access（遠端存取） | L M H | 建立並記錄每種允許之遠端存取類型的使用限制、組態/連線要求與實施指引；在允許連線前授權每種遠端存取類型。 |
| AC-18 | Wireless Access（無線存取） | L M H | 建立每種無線存取類型之組態要求、連線要求與實施指引；在允許連線前授權每種無線存取類型。 |
| AC-19 | Access Control for Mobile Devices（行動裝置存取控制） | L M H | 建立組織控制行動裝置之組態要求、連線要求與實施指引（含裝置在受控區域外時）；授權行動裝置連接組織系統。 |
| AC-20 | Use of External Systems（外部系統使用） | L M H | 建立條款與條件或識別已聲明之控制措施，與擁有/營運外部系統之組織建立信任關係，允許授權人員存取系統或處理資訊。 |
| AC-21 | Information Sharing（資訊分享） | M H | 使授權使用者能判斷分享夥伴之存取授權是否符合資訊的存取與使用限制；採用自動化機制協助使用者做出資訊分享決策。 |
| AC-22 | Publicly Accessible Content（公開可存取內容） | L M H | 指定授權公開資訊之人員；訓練授權人員確保公開資訊不含非公開資訊；在張貼前審查內容；定期審查已公開內容。 |
| AC-23 | Data Mining Protection（資料探勘保護） | — | 對組織定義之資料儲存物件採用組織定義之技術，以偵測並防範未授權之資料探勘。 |
| AC-24 | Access Control Decisions（存取控制決策） | — | 建立程序或實施機制，確保在存取強制執行前，對每個存取請求套用組織定義之存取控制決策。 |
| AC-25 | Reference Monitor（參考監視器） | — | 為組織定義之存取控制政策實施參考監視器，使其防篡改、始終被調用，且小到足以進行完整性可保證之分析與測試。 |

---

## AT — Awareness and Training（安全意識與訓練）

確保使用和建立資訊系統的人員接受適當的安全與隱私意識培訓及角色基礎訓練。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| AT-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達安全意識與訓練政策及程序。 |
| AT-2 | Literacy Training and Awareness（素養訓練與意識） | L M H P | 為系統使用者（含管理者、高階主管及承包商）提供安全與隱私素養訓練：新使用者初始訓練及定期複訓；系統變更或特定事件後之訓練；採用組織定義之技術提升意識。 |
| AT-3 | Role-based Training（角色基礎訓練） | L M H P | 在授權存取系統前及定期為具特定角色與職責之人員提供角色基礎安全與隱私訓練；系統變更時更新訓練。 |
| AT-4 | Training Records（訓練記錄） | L M H P | 記錄並監控資訊安全與隱私訓練活動；保留個人訓練記錄至組織定義之期間。 |
| AT-6 | Training Feedback（訓練回饋） | — | 以組織定義之頻率向組織定義之人員提供組織訓練結果之回饋。 |

---

## AU — Audit and Accountability（稽核與問責）

涵蓋稽核日誌的產生、審查、保護、保留，以及不可否認性與跨組織稽核等機制。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| AU-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達稽核與問責政策及程序。 |
| AU-2 | Event Logging（事件日誌記錄） | L M H P | 識別系統能夠記錄以支援稽核功能之事件類型；與需要稽核資訊之組織實體協調事件日誌記錄功能；指定要記錄的事件類型。 |
| AU-3 | Content of Audit Records（稽核記錄內容） | L M H | 確保稽核記錄包含：事件類型、發生時間、發生地點、事件來源、事件結果，以及相關個人/主體/物件之身分識別。 |
| AU-4 | Audit Log Storage Capacity（稽核日誌儲存容量） | L M H | 配置足夠的稽核日誌儲存容量以容納組織定義之稽核日誌保留要求。 |
| AU-5 | Response to Audit Logging Process Failures（稽核日誌處理失敗之回應） | L M H | 在稽核日誌處理失敗時於組織定義之時間內警告指定人員或角色；採取額外行動。 |
| AU-6 | Audit Record Review, Analysis, and Reporting（稽核記錄審查、分析與報告） | L M H | 以組織定義之頻率審查並分析系統稽核記錄，尋找不當或異常活動跡象及其潛在影響；向指定人員報告發現。 |
| AU-7 | Audit Record Reduction and Report Generation（稽核記錄精簡與報告產生） | M H | 提供並實施稽核記錄精簡與報告產生能力，支援隨需稽核審查、分析、報告需求及事後調查；不更改原始內容或時間順序。 |
| AU-8 | Time Stamps（時間戳記） | L M H | 使用內部系統時鐘為稽核記錄產生時間戳記；記錄符合組織定義精確度之時間戳記，使用 UTC 或含固定/本地時區偏移。 |
| AU-9 | Protection of Audit Information（稽核資訊保護） | L M H | 保護稽核資訊與稽核日誌工具免受未授權之存取、修改與刪除；偵測到未授權行為時警告指定人員。 |
| AU-10 | Non-repudiation（不可否認性） | H | 提供不可否認之證據，證明個人（或代表個人行事之行程）已執行組織定義之行動。 |
| AU-11 | Audit Record Retention（稽核記錄保留） | L M H P | 保留稽核記錄至組織定義之期間，以支援事後調查並符合法規與組織資訊保留要求。 |
| AU-12 | Audit Record Generation（稽核記錄產生） | L M H | 在組織定義之系統元件上為 AU-2 所定義之事件類型提供稽核記錄產生能力；允許指定人員選擇要記錄的事件類型。 |
| AU-13 | Monitoring for Information Disclosure（資訊揭露監控） | — | 以組織定義之頻率監控開源資訊及/或資訊站點，尋找組織資訊未授權揭露之證據；發現揭露時通知指定人員。 |
| AU-14 | Session Audit（工作階段稽核） | — | 提供並實施在組織定義之情況下，對使用者工作階段內容進行記錄/檢視/聽取/日誌記錄之能力；與法律顧問協商開發工作階段稽核活動。 |
| AU-16 | Cross-organizational Audit Logging（跨組織稽核日誌） | — | 當稽核資訊跨組織邊界傳輸時，採用組織定義之方法協調外部組織間之稽核資訊。 |

---

## CA — Assessment, Authorization, and Monitoring（評估、授權與監控）

安全與隱私控制之評估、系統授權、持續監控、滲透測試及行動計畫之管理。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| CA-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達評估、授權與監控政策及程序。 |
| CA-2 | Control Assessments（控制評估） | L M H P | 選擇適當評估員；制定控制評估計畫（涵蓋範圍、評估程序、環境、團隊、角色與職責）；確保評估獨立性。 |
| CA-3 | Information Exchange（資訊交換） | L M H | 使用互連安全協議、備忘錄、服務層級協議等核准並管理系統間之資訊交換；記錄介面特性、安全與隱私要求。 |
| CA-5 | Plan of Action and Milestones（行動計畫與里程碑） | L M H P | 制定系統行動計畫與里程碑以記錄計畫性矯正行動；以組織定義之頻率更新現有計畫。 |
| CA-6 | Authorization（授權） | L M H P | 指派高階官員為系統授權官員及共用控制授權官員；確保授權官員在系統運作前接受共用控制之使用並授權系統運作。 |
| CA-7 | Continuous Monitoring（持續監控） | L M H P | 制定系統層級持續監控策略並依組織層級策略實施；建立系統層級監控指標、頻率；持續控制評估、監控報告。 |
| CA-8 | Penetration Testing（滲透測試） | H | 以組織定義之頻率對組織定義之系統或系統元件執行滲透測試。 |
| CA-9 | Internal System Connections（內部系統連接） | L M H | 授權內部元件連接至系統；記錄每個內部連接之介面特性、安全與隱私要求；在條件滿足後終止；定期審查持續需求。 |

---

## CM — Configuration Management（組態管理）

系統基線組態的建立、變更控制、元件清冊、軟體限制及組態設定之管理。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| CM-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達組態管理政策及程序。 |
| CM-2 | Baseline Configuration（基線組態） | L M H | 開發、記錄並維護系統的當前基線組態，並在其控制下進行管理。 |
| CM-3 | Configuration Change Control（組態變更控制） | M H | 透過組態控制委員會判定組態受控變更的類型；審查提議的變更並核准/不核准；記錄變更決定及相關理由。 |
| CM-4 | Impact Analyses（影響分析） | L M H | 在實施變更前分析對系統之影響，以判定潛在的安全與隱私影響。 |
| CM-5 | Access Restrictions for Change（變更存取限制） | M H | 定義、記錄、核准並強制執行與系統變更相關之實體與邏輯存取限制。 |
| CM-6 | Configuration Settings（組態設定） | L M H | 使用反映最嚴格模式之組態設定建立並記錄系統元件之組態設定；實施組態設定；識別、記錄並核准偏離情況。 |
| CM-7 | Least Functionality（最小功能） | L M H | 配置系統僅提供組織定義之任務必要能力；限制或禁止使用組織定義之功能、連接埠、協定、軟體及/或服務。 |
| CM-8 | System Component Inventory（系統元件清冊） | L M H | 開發並記錄系統元件清冊，準確反映系統；與系統邊界內元件的授權一致；以組織定義之精確度維護。 |
| CM-9 | Configuration Management Plan（組態管理計畫） | M H | 制定、記錄並實施系統之組態管理計畫，涵蓋角色、職責、流程與程序。 |
| CM-10 | Software Usage Restrictions（軟體使用限制） | L M H | 依據軟體合約與版權法使用軟體與相關文件；追蹤受數量授權保護之軟體使用情況；控制複製與分發。 |
| CM-11 | User-installed Software（使用者安裝軟體） | L M H | 建立使用者安裝軟體之管理政策；強制執行軟體安裝政策；以組織定義之頻率監控合規性。 |
| CM-12 | Information Location（資訊位置） | M H | 識別並記錄組織定義之資訊的位置（系統層級），以及處理該資訊之特定系統元件。 |
| CM-13 | Data Action Mapping（資料行為映射） | P | 建立並記錄組織已識別之有問題資料行為的映射。 |
| CM-14 | Signed Components（簽章元件） | H | 防止安裝未經驗證軟體與韌體簽章之軟體與韌體元件。 |

---

## CP — Contingency Planning（應變計畫）

涵蓋業務持續運作、災難復原、系統備份、替代場所與通訊之應變準備。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| CP-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達應變計畫政策及程序。 |
| CP-2 | Contingency Plan（應變計畫） | L M H | 制定系統應變計畫，識別重要任務與業務功能及相關應變需求；提供復原目標、優先順序與指標；定義角色與職責。 |
| CP-3 | Contingency Training（應變訓練） | L M H | 在指派角色或職責後及組織定義之頻率為應變人員提供應變訓練。 |
| CP-4 | Contingency Plan Testing（應變計畫測試） | L M H | 以組織定義之頻率使用組織定義之測試方法測試應變計畫以判定其有效性及組織準備度。 |
| CP-6 | Alternate Storage Site（替代儲存場所） | M H | 建立含必要協議之替代儲存場所，允許儲存並擷取系統備份資訊。 |
| CP-7 | Alternate Processing Site（替代處理場所） | M H | 建立含必要協議之替代處理場所，在主要處理能力不可用時，允許轉移並恢復重要任務與業務功能操作。 |
| CP-8 | Telecommunications Services（電信服務） | M H | 建立替代電信服務，在主要電信能力不可用時，允許持續進行重要任務與業務功能操作。 |
| CP-9 | System Backup（系統備份） | L M H | 以組織定義之頻率進行使用者層級、系統層級及系統文件（含安全與隱私相關文件）之備份。 |
| CP-10 | System Recovery and Reconstitution（系統復原與重建） | L M H | 提供在中斷、妥協或失效後將系統復原與重建至已知狀態之能力。 |
| CP-11 | Alternate Communications Protocols（替代通訊協定） | — | 提供使用替代通訊協定以支援維持操作持續性之能力。 |
| CP-12 | Safe Mode（安全模式） | — | 當組織定義之條件被偵測到時，系統在安全模式下運作，限制可能被利用的能力。 |
| CP-13 | Alternative Security Mechanisms（替代安全機制） | — | 當主要安全機制不可用時，採用替代或補充安全機制。 |

---

## IA — Identification and Authentication（識別與鑑別）

管理使用者與裝置的身分識別、鑑別器（密碼、憑證、多因子等）及身分驗證。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| IA-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達識別與鑑別政策及程序。 |
| IA-2 | Identification and Authentication (Organizational Users)（組織使用者識別與鑑別） | L M H | 唯一識別並鑑別組織使用者，以及代表組織使用者行事之行程。 |
| IA-3 | Device Identification and Authentication（裝置識別與鑑別） | M H | 在建立系統連線前，唯一識別並鑑別組織定義之裝置及/或裝置類型。 |
| IA-4 | Identifier Management（識別碼管理） | L M H | 透過接收授權指派個人/群組/角色/服務/裝置識別碼來管理識別碼；防止識別碼重複使用；在閒置指定時間後停用。 |
| IA-5 | Authenticator Management（鑑別器管理） | L M H | 透過驗證接收初始鑑別器之個人/群組/角色/服務身分來管理鑑別器；建立初始鑑別器內容；確保足夠的機制強度。 |
| IA-6 | Authentication Feedback（鑑別回饋） | L M H | 在鑑別過程中模糊鑑別資訊的回饋，以保護資訊免於可能的利用。 |
| IA-7 | Cryptographic Module Authentication（密碼模組鑑別） | L M H | 實施符合適用法律、行政命令、指令、政策、法規、標準與指引之密碼模組鑑別機制。 |
| IA-8 | Identification and Authentication (Non-organizational Users)（非組織使用者識別與鑑別） | L M H | 唯一識別並鑑別非組織使用者或代表非組織使用者行事之行程。 |
| IA-9 | Service Identification and Authentication（服務識別與鑑別） | — | 使用組織定義之安全保護措施識別並鑑別組織定義之系統服務與應用程式。 |
| IA-10 | Adaptive Authentication（自適應鑑別） | — | 要求使用者在存取組織定義之系統時採用與組織定義之情況或情境相適應之鑑別。 |
| IA-11 | Re-authentication（重新鑑別） | L M H | 要求使用者在組織定義之情況或情境下重新鑑別。 |
| IA-12 | Identity Proofing（身分驗證） | L M H | 以組織定義之等級進行身分驗證以接收帳號與鑑別器；解決身分驗證過程中之問題。 |

---

## IR — Incident Response（事件回應）

事件處理、報告、監控、測試及回應計畫之建立與維護。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| IR-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達事件回應政策及程序。 |
| IR-2 | Incident Response Training（事件回應訓練） | L M H | 在擔任事件回應角色或職責後及組織定義之頻率，為使用者提供系統相關事件回應訓練。 |
| IR-3 | Incident Response Testing（事件回應測試） | M H | 以組織定義之頻率使用組織定義之測試方法測試事件回應能力，以判定有效性並記錄結果。 |
| IR-4 | Incident Handling（事件處理） | L M H | 實施事件處理能力，包含準備、偵測與分析、遏制、根除與復原；協調事件處理活動；將事件資訊納入事件回應計畫更新。 |
| IR-5 | Incident Monitoring（事件監控） | L M H | 追蹤並記錄系統安全與隱私事件。 |
| IR-6 | Incident Reporting（事件報告） | L M H P | 要求人員在組織定義之時間內向組織事件回應能力報告可疑之安全與隱私事件；向組織定義之機關報告安全與隱私事件資訊。 |
| IR-7 | Incident Response Assistance（事件回應協助） | L M H | 提供對系統使用者可用之事件回應支援資源，作為組織事件回應能力之組成部分，為事件的處理與報告提供諮詢與協助。 |
| IR-8 | Incident Response Plan（事件回應計畫） | L M H | 制定事件回應計畫，提供組織實施其事件回應能力之路線圖；以組織定義之頻率審查並核准事件回應計畫。 |
| IR-9 | Information Spillage Response（資訊溢出回應） | — | 透過識別受污染之資訊、系統或元件來回應資訊溢出；對人員警告、隔離受污染系統、根除資訊、識別相關系統與人員。 |
| IR-10 | Integrated Information Security Analysis Team（整合資安分析團隊） | — | 建立可在組織內部署之整合資訊安全分析團隊，以調查組織定義之安全問題或事件。 |

---

## MA — Maintenance（維護）

系統與元件的受控維護、遠端維護、維護工具管控及維護人員管理。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| MA-1 | Policy and Procedures（政策與程序） | L M H | 制定、記錄並傳達維護政策及程序。 |
| MA-2 | Controlled Maintenance（受控維護） | L M H | 依據製造商/供應商規格及/或組織要求，排程、記錄並審查系統元件的維護、修理與更換記錄。 |
| MA-3 | Maintenance Tools（維護工具） | M H | 核准、控制並監控維護工具之使用；審查先前核准之工具清單；防止未授權移除維護設備。 |
| MA-4 | Nonlocal Maintenance（非本地維護） | L M H | 核准並監控非本地維護與診斷活動；允許使用非本地維護與診斷工具且符合組織政策；在非本地維護完成後終止工作階段與連線。 |
| MA-5 | Maintenance Personnel（維護人員） | L M H | 建立維護人員授權流程；維護組織授權維護人員清單；確認存取授權未指定需護送之人員具有適當存取授權。 |
| MA-6 | Timely Maintenance（及時維護） | M H | 取得組織定義之系統元件的備用零件與維護支援，以在發生失效後之組織定義之時間內進行維護。 |
| MA-7 | Field Maintenance（現場維護） | — | 將組織定義之系統元件限制在現場維護修理而非移除至維護設施。 |

---

## MP — Media Protection（媒體保護）

管控儲存媒體的存取、標記、儲存、運送、消毒與使用。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| MP-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達媒體保護政策及程序。 |
| MP-2 | Media Access（媒體存取） | L M H | 限制對組織定義之數位及/或非數位媒體類型之存取，僅限組織定義之人員或角色。 |
| MP-3 | Media Marking（媒體標記） | M H | 標記包含組織定義資訊類型之系統媒體，指示適用之分發限制、處理注意事項及安全標記。 |
| MP-4 | Media Storage（媒體儲存） | M H | 在組織定義之受控區域內實體控制並安全儲存組織定義之數位及/或非數位媒體類型。 |
| MP-5 | Media Transport（媒體運送） | M H | 使用組織定義之安全保護措施保護並控制組織定義之媒體類型在受控區域外的運送。 |
| MP-6 | Media Sanitization（媒體消毒） | L M H | 在處置、系統釋出或再使用前，依據適用之標準與政策消毒組織定義之系統媒體。 |
| MP-7 | Media Use（媒體使用） | L M H | 使用組織定義之安全保護措施限制組織定義之系統媒體類型之使用。 |
| MP-8 | Media Downgrading（媒體降級） | — | 依據組織定義之標準與政策建立系統媒體降級流程，包含相關降級機制之使用。 |

---

## PE — Physical and Environmental Protection（實體與環境保護）

實體存取控制、環境控制、電力保護、消防、水害防護及資產監控。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| PE-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達實體與環境保護政策及程序。 |
| PE-2 | Physical Access Authorizations（實體存取授權） | L M H | 制定、核准並維護被授權實體存取系統所在設施之人員清單；以組織定義之頻率審查並更新清單。 |
| PE-3 | Physical Access Control（實體存取控制） | L M H | 在組織定義之入口/出口點強制執行實體存取授權，使用組織定義之實體存取控制系統/裝置。 |
| PE-4 | Access Control for Transmission（傳輸存取控制） | M H | 使用組織定義之安全保護措施控制對組織定義之系統分配與佈線區域之實體存取。 |
| PE-5 | Access Control for Output Devices（輸出裝置存取控制） | M H | 控制對輸出裝置之實體存取，防止未授權個人查看輸出。 |
| PE-6 | Monitoring Physical Access（實體存取監控） | L M H | 監控對系統設施的實體存取以偵測並回應實體安全事件；以組織定義之頻率審查實體存取日誌；協調審查結果。 |
| PE-8 | Visitor Access Records（訪客存取記錄） | L M H | 維護訪客存取記錄至系統所在設施，包含姓名、所屬組織、訪客簽名、身分證件、訪問日期、進入/離開時間、目的及被訪人員。 |
| PE-9 | Power Equipment and Cabling（電力設備與佈線） | M H | 保護系統電力設備與電力佈線免受損害與破壞。 |
| PE-10 | Emergency Shutoff（緊急關閉） | M H | 為組織定義之系統或個別元件提供在緊急情況下關閉之能力；將緊急關閉開關/裝置置於組織定義之位置。 |
| PE-11 | Emergency Power（緊急電力） | M H | 提供備援電源以促進在長期主要電源中斷時之有序關閉/轉換至替代場所。 |
| PE-12 | Emergency Lighting（緊急照明） | L M H | 採用並維護在電源故障或中斷時自動啟動之緊急照明系統。 |
| PE-13 | Fire Protection（消防保護） | L M H | 採用並維護系統設施之滅火與偵測裝置/系統。 |
| PE-14 | Environmental Controls（環境控制） | L M H | 在系統設施內維護組織定義之可接受範圍內之溫度與濕度水平；以組織定義之頻率監控環境水平。 |
| PE-15 | Water Damage Protection（水害保護） | L M H | 透過在組織定義之位置提供主水閘閥或隔離閥，保護系統免受水害。 |
| PE-16 | Delivery and Removal（交付與移除） | L M H | 授權、監控並控制組織定義之系統元件進出設施並維護記錄。 |
| PE-17 | Alternate Work Site（替代工作場所） | M H | 在替代工作場所實施組織定義之安全控制措施；以組織定義之頻率評估替代工作場所控制之有效性。 |
| PE-18 | Location of System Components（系統元件位置） | — | 將系統元件置於設施內以最小化實體與環境危害之潛在損害，並最小化未授權存取之機會。 |
| PE-19 | Information Leakage（資訊洩漏） | — | 保護系統免受電磁信號散射造成之資訊洩漏。 |
| PE-20 | Asset Monitoring and Tracking（資產監控與追蹤） | — | 在組織定義區域內，使用組織定義之資產位置技術以組織定義之頻率追蹤並監控組織資產之位置與移動。 |
| PE-21 | Electromagnetic Pulse Protection（電磁脈衝保護） | — | 對組織定義之系統與元件採用組織定義之防護技術以防止電磁脈衝損害。 |
| PE-22 | Component Marking（元件標記） | — | 標記系統硬體元件以指示系統元件之影響或分類等級。 |
| PE-23 | Facility Location（設施位置） | — | 根據組織定義之要求規劃處理設施之位置或場地。 |

---

## PL — Planning（規劃）

系統安全與隱私計畫的制定、行為規則、安全架構及基線選擇。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| PL-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達規劃政策及程序。 |
| PL-2 | System Security and Privacy Plans（系統安全與隱私計畫） | L M H P | 制定系統安全與隱私計畫，定義系統的授權邊界、運作環境、安全分類、系統所實施之控制措施。 |
| PL-4 | Rules of Behavior（行為規則） | L M H P | 建立並提供需要存取系統之個人的可接受使用行為規則及限制；在授權存取前獲取個人簽名確認。 |
| PL-7 | Concept of Operations（作業概念） | — | 制定系統之作業概念，描述組織對系統之運作方式以及系統安全與隱私架構間之關係。 |
| PL-8 | Security and Privacy Architectures（安全與隱私架構） | L M H | 制定描述安全與隱私控制如何被整合至整體系統架構中之安全與隱私架構。 |
| PL-9 | Central Management（集中管理） | — | 集中管理組織定義之控制措施和相關流程。 |
| PL-10 | Baseline Selection（基線選擇） | L M H | 基於系統之影響等級為系統選擇控制基線。 |
| PL-11 | Baseline Tailoring（基線裁切） | L M H | 依據組織定義之要求裁切選定之控制基線。 |

---

## PM — Program Management（計畫管理）

組織層級之資安與隱私計畫管理，涵蓋風險策略、人力、威脅意識、供應鏈策略等。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| PM-1 | Information Security Program Plan（資訊安全計畫方案） | P | 制定並傳達全組織資訊安全計畫方案。 |
| PM-2 | Information Security Program Leadership Role（資訊安全計畫領導角色） | P | 指派具授權、責任與資源之高階資訊安全官員協調、開發、實施並維護全組織資訊安全計畫。 |
| PM-3 | Information Security and Privacy Resources（資訊安全與隱私資源） | P | 將規劃與程式設計所需資源納入資本規劃與投資請求；建立資訊安全與隱私所需資源之獨立報告。 |
| PM-4 | Plan of Action and Milestones Process（行動計畫與里程碑流程） | P | 實施流程以確保行動計畫與里程碑的制定、系統安全與隱私計畫的記錄。 |
| PM-5 | System Inventory（系統清冊） | P | 開發並維護組織系統清冊。 |
| PM-6 | Measures of Performance（績效衡量） | P | 制定、監控並報告資訊安全與隱私計畫績效衡量指標。 |
| PM-7 | Enterprise Architecture（企業架構） | P | 制定並維護包含安全與隱私考量之企業架構。 |
| PM-8 | Critical Infrastructure Plan（關鍵基礎設施計畫） | — | 處理資訊安全與隱私問題以保護關鍵基礎設施與關鍵資源。 |
| PM-9 | Risk Management Strategy（風險管理策略） | P | 制定包含風險框架之全面風險管理策略；在全組織實施風險管理策略。 |
| PM-10 | Authorization Process（授權流程） | P | 管理系統之安全與隱私授權狀態；指定授權適用之個人角色。 |
| PM-11 | Mission and Business Process Definition（任務與業務流程定義） | P | 定義組織任務與業務流程，並考量安全與隱私；將保護需求之定義整合至關聯任務與業務流程。 |
| PM-12 | Insider Threat Program（內部威脅計畫） | — | 實施跨領域的組織內部威脅計畫，包含集中式的來自內部來源之威脅偵測與意識能力。 |
| PM-13 | Security and Privacy Workforce（安全與隱私人力） | P | 建立安全與隱私人力發展與改善計畫。 |
| PM-14 | Testing, Training, and Monitoring（測試、訓練與監控） | P | 實施安全與隱私測試、訓練與監控流程。 |
| PM-15 | Security and Privacy Groups and Associations（安全與隱私團體及協會） | — | 與組織定義之安全與隱私團體及協會建立聯繫以隨時掌握最新推薦措施、建議與最佳實踐。 |
| PM-16 | Threat Awareness Program（威脅意識計畫） | — | 實施跨組織之威脅意識計畫，包含威脅情報分享能力。 |
| PM-17 | Protecting CUI on External Systems（外部系統之受控非機密資訊保護） | — | 建立管理外部系統上受控非機密資訊保護之政策與程序。 |
| PM-18 | Privacy Program Plan（隱私計畫方案） | P | 制定並傳達全組織隱私計畫方案。 |
| PM-19 | Privacy Program Leadership Role（隱私計畫領導角色） | P | 指派具授權、責任與資源之高階隱私官員協調、開發、實施並維護全組織隱私計畫。 |
| PM-20 | Dissemination of Privacy Program Information（隱私計畫資訊傳播） | P | 維護公開可存取之網頁或類似管道，提供組織隱私計畫活動、政策與程序之資訊。 |
| PM-21 | Accounting of Disclosures（揭露之會計） | P | 為記錄系統中之個人記錄建立揭露之會計，包含日期/性質/目的/接收方；保留組織定義之期間。 |
| PM-22 | Personally Identifiable Information Quality Management（個資品質管理） | P | 制定並實施全組織政策及程序以確保組織保管之個資品質。 |
| PM-23 | Data Governance Body（資料治理機構） | P | 建立資料治理機構以提供組織定義之針對個資管理之規劃、監督與協調。 |
| PM-24 | Data Integrity Board（資料完整性委員會） | P | 建立資料完整性委員會以確保電腦比對在法律、法規與政策授權下進行。 |
| PM-25 | Minimization of PII Used in Testing, Training, and Research（測試訓練及研究中個資最小化） | P | 制定政策與程序以最小化測試、訓練及研究中使用之個資。 |
| PM-26 | Complaint Management（申訴管理） | P | 實施流程以接收並回應有關隱私實踐之投訴、疑慮或問題。 |
| PM-27 | Privacy Reporting（隱私報告） | P | 制定並維護組織定義之隱私報告，以展示對組織及法規隱私要求之可說明性。 |
| PM-28 | Risk Framing（風險框架） | — | 從安全與隱私角度識別產生組織風險之假設、限制、風險容忍度及優先順序/權衡。 |
| PM-29 | Risk Management Program Leadership Roles（風險管理計畫領導角色） | — | 指定高階官員管理風險管理流程；將組織風險管理流程與任務/業務流程對齊。 |
| PM-30 | Supply Chain Risk Management Strategy（供應鏈風險管理策略） | — | 制定全組織之供應鏈風險管理策略。 |
| PM-31 | Continuous Monitoring Strategy（持續監控策略） | — | 制定全組織之持續監控策略並實施持續監控計畫。 |
| PM-32 | Purposing（目的界定） | P | 分析組織定義之系統以識別處理個資時要達到之組織目的。 |

---

## PS — Personnel Security（人員安全）

人員篩選、職位風險指定、離職/調動處理、存取協議及人員制裁。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| PS-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達人員安全政策及程序。 |
| PS-2 | Position Risk Designation（職位風險指定） | L M H | 為所有組織職位指定風險等級；建立組織定義之頻率以審查與更新職位風險指定之篩選標準。 |
| PS-3 | Personnel Screening（人員篩選） | L M H | 在授權系統存取前篩選人員；依據組織定義之條件與頻率重新篩選。 |
| PS-4 | Personnel Termination（人員離職） | L M H P | 在個人離職時，於組織定義之時間內停用系統存取；終止/撤銷所有鑑別器/憑證；進行離職面談；收回安全相關財產。 |
| PS-5 | Personnel Transfer（人員調動） | L M H | 在人員被重新指派或調動至其他職位時，審查並確認對系統與設施之持續存取授權需求。 |
| PS-6 | Access Agreements（存取協議） | L M H P | 制定並記錄組織系統之存取協議；以組織定義之頻率審查與更新；確保需要存取之個人在獲得存取前簽署。 |
| PS-7 | External Personnel Security（外部人員安全） | L M H | 建立外部服務提供者之人員安全要求，含角色與職責；要求提供者遵循組織之人員安全政策與程序。 |
| PS-8 | Personnel Sanctions（人員制裁） | L M H | 對未遵循組織安全與隱私政策及程序之個人採用正式制裁流程。 |
| PS-9 | Position Descriptions（職位說明） | — | 將安全與隱私角色職責納入組織職位說明中。 |

---

## PT — PII Processing and Transparency（個資處理與透明度）🆕

Rev 5 新增家族，管控個人可識別資訊之處理授權、目的限制、同意、隱私通知等。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| PT-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達個資處理與透明度政策及程序。 |
| PT-2 | Authority to Process PII（處理個資之授權） | P | 判定並記錄授權處理個資之法律授權；限制個資處理僅限於已授權之目的。 |
| PT-3 | PII Processing Purposes（個資處理目的） | P | 識別並記錄處理個資之目的，確保處理符合已記載之目的且非不相容之目的。 |
| PT-4 | Consent（同意） | P | 依據適用法律及組織政策實施機制，在處理個資前取得個人之同意。 |
| PT-5 | Privacy Notice（隱私通知） | P | 向個人提供有效的隱私通知，說明處理個資之做法；更新隱私通知以反映處理做法之變更。 |
| PT-6 | System of Records Notice（記錄系統通知） | P | 針對受記錄系統涵蓋之系統，依據適用法律發布記錄系統通知。 |
| PT-7 | Specific Categories of PII（特定類別個資） | P | 對特定類別之個資（如社會安全號碼）適用組織定義之特別處理。 |
| PT-8 | Computer Matching Requirements（電腦比對要求） | P | 當從事電腦比對時，確保符合適用之法律要求。 |

---

## RA — Risk Assessment（風險評估）

安全分類、風險評估執行、弱點掃描、威脅獵捕及隱私影響評估。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| RA-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達風險評估政策及程序。 |
| RA-2 | Security Categorization（安全分類） | L M H P | 依據適用法律/指令/政策/法規/標準對系統與其處理/儲存/傳輸之資訊進行分類；記錄安全分類結果。 |
| RA-3 | Risk Assessment（風險評估） | L M H P | 進行風險評估以識別系統操作、資產、個人、其他組織及國家面臨之威脅與風險；評估對機密性、完整性與可用性之危害可能性與影響。 |
| RA-5 | Vulnerability Monitoring and Scanning（弱點監控與掃描） | L M H | 以組織定義之頻率及/或新弱點被識別並報告時監控並掃描系統弱點；採用能列舉平台、軟體漏洞與不當組態之工具。 |
| RA-6 | Technical Surveillance Countermeasures Survey（技術監控反制調查） | — | 在組織定義之位置以組織定義之頻率進行技術監控反制調查。 |
| RA-7 | Risk Response（風險回應） | L M H P | 依據組織風險容忍度回應在安全與隱私評估、稽核或監控中發現的風險。 |
| RA-8 | Privacy Impact Assessments（隱私影響評估） | P | 進行隱私影響評估以評估收集、處理、維護及傳播個資之影響。 |
| RA-9 | Criticality Analysis（關鍵性分析） | H | 識別任務所依賴之關鍵系統元件與功能，並以組織定義之頻率進行關鍵性分析。 |
| RA-10 | Threat Hunting（威脅獵捕） | — | 使用組織定義之技術與方法以組織定義之頻率進行威脅獵捕活動，以搜尋並識別可能逃避現有控制之妥協指標。 |

---

## SA — System and Services Acquisition（系統與服務取得）

系統開發生命週期、取得流程、外部服務、供應鏈保護、開發者安全等控制。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| SA-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達系統與服務取得政策及程序。 |
| SA-2 | Allocation of Resources（資源配置） | L M H P | 判定安全與隱私對系統或系統服務之高層級需求作為任務/業務流程規劃之一部分；將保護系統所需資源納入規劃。 |
| SA-3 | System Development Life Cycle（系統開發生命週期） | L M H P | 使用納入安全與隱私考量之系統開發生命週期來取得、開發並管理系統。 |
| SA-4 | Acquisition Process（取得流程） | L M H P | 在系統、元件或服務之取得合約中含入安全與隱私之功能、強度、保證、韌性要求；所需之安全與隱私文件；開發與評估/測試環境之保護。 |
| SA-5 | System Documentation（系統文件） | L M H | 取得或制定系統之管理員與使用者文件，描述安全功能的設定、保護機制、使用方法及已知弱點。 |
| SA-8 | Security and Privacy Engineering Principles（安全與隱私工程原則） | L M H P | 在系統之規格、設計、開發、實施與修改中套用安全與隱私工程原則。 |
| SA-9 | External System Services（外部系統服務） | L M H P | 要求外部系統服務提供者遵循組織安全與隱私要求，採用組織定義之控制措施；定義並記錄政府監督與使用者角色。 |
| SA-10 | Developer Configuration Management（開發者組態管理） | M H | 要求系統/元件/服務之開發者在開發期間執行組態管理；記錄、管理並控制安全相關項目之變更完整性。 |
| SA-11 | Developer Testing and Evaluation（開發者測試與評估） | M H | 要求開發者制定並實施安全與隱私評估計畫；執行單元/整合/系統/回歸測試；提供測試/評估結果之證據。 |
| SA-15 | Development Process, Standards, and Tools（開發流程、標準與工具） | M H | 要求開發者遵循記錄之開發流程，含安全與隱私考量；記錄開發中使用之標準與工具。 |
| SA-16 | Developer-provided Training（開發者提供之訓練） | — | 要求開發者提供安全與隱私功能、控制措施及/或機制之正確使用與操作訓練。 |
| SA-17 | Developer Security and Privacy Architecture and Design（開發者安全與隱私架構及設計） | H | 要求開發者產生設計規格與安全/隱私架構，描述所需安全/隱私功能以及實體/邏輯元件間之安全分配。 |
| SA-20 | Customized Development of Critical Components（關鍵元件客製開發） | — | 重新實施或客製開發組織定義之關鍵系統元件。 |
| SA-21 | Developer Screening（開發者篩選） | — | 要求開發者滿足組織定義之存取篩選標準。 |
| SA-22 | Unsupported System Components（不受支援之系統元件） | L M H | 替換不再受開發者/供應商支援之系統元件；為繼續使用提供例外之理由與核准。 |
| SA-23 | Specialization（專門化） | — | 採用專門化作為系統設計之一部分，以增加資訊系統之可信度。 |

---

## SC — System and Communications Protection（系統與通訊保護）

邊界保護、加密、傳輸安全、會話管理、行程隔離、DNS 安全等廣泛之系統通訊保護控制。此為最大控制家族。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| SC-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達系統與通訊保護政策及程序。 |
| SC-2 | Separation of System and User Functionality（系統與使用者功能分離） | M H | 將使用者功能（含使用者介面服務）與系統管理功能分離。 |
| SC-3 | Security Function Isolation（安全功能隔離） | H | 將安全功能與非安全功能隔離。 |
| SC-4 | Information in Shared System Resources（共享系統資源中之資訊） | M H | 防止透過共享系統資源之未授權與意外資訊轉移。 |
| SC-5 | Denial-of-service Protection（阻斷服務保護） | L M H | 採用組織定義之安全保護措施保護或限制組織定義之阻斷服務攻擊之影響。 |
| SC-7 | Boundary Protection（邊界保護） | L M H | 在系統之外部邊界及內部關鍵邊界監控並控制通訊；實施僅允許連線之子網路以連接公開可存取之系統元件。 |
| SC-8 | Transmission Confidentiality and Integrity（傳輸機密性與完整性） | M H | 保護傳輸資訊之機密性及/或完整性。 |
| SC-10 | Network Disconnect（網路中斷） | M H | 在工作階段結束或組織定義之閒置期間後終止網路連線。 |
| SC-11 | Trusted Path（可信路徑） | — | 在使用者與系統安全功能之間建立組織定義之可信通訊路徑。 |
| SC-12 | Cryptographic Key Establishment and Management（密碼金鑰建立與管理） | L M H | 依據組織定義之金鑰管理要求建立並管理密碼金鑰。 |
| SC-13 | Cryptographic Protection（密碼保護） | L M H | 判定組織定義之密碼使用情境並實施符合適用法律之密碼類型。 |
| SC-15 | Collaborative Computing Devices and Applications（協作運算裝置與應用） | L M H | 禁止組織定義之例外狀況下遠端啟動協作運算裝置與應用；向位於裝置附近之使用者提供使用指示。 |
| SC-16 | Transmission of Security and Privacy Attributes（安全與隱私屬性傳輸） | — | 將安全與隱私屬性與傳輸之資訊關聯。 |
| SC-17 | Public Key Infrastructure Certificates（公鑰基礎設施憑證） | M H | 發行公鑰憑證時，依據組織定義之憑證政策或取得來自已核准服務提供者之公鑰憑證。 |
| SC-18 | Mobile Code（行動程式碼） | M H | 定義可接受與不可接受之行動程式碼與行動程式碼技術；建立使用限制與實施指引。 |
| SC-20 | Secure Name/Address Resolution Service (Authoritative Source)（安全名稱/位址解析服務：權威來源） | L M H | 除授權回應之外，另提供資料來源鑑別與資料完整性驗證方式。 |
| SC-21 | Secure Name/Address Resolution Service (Recursive or Caching Resolver)（安全名稱/位址解析服務：遞迴或快取解析器） | L M H | 對自權威來源收到之名稱/位址解析回應執行資料來源鑑別與資料完整性驗證。 |
| SC-22 | Architecture and Provisioning for Name/Address Resolution Service（名稱/位址解析服務之架構與佈建） | L M H | 確保提供名稱/位址解析服務之系統具備容錯性並實施內部/外部角色分離。 |
| SC-23 | Session Authenticity（工作階段真實性） | M H | 保護通訊工作階段之真實性。 |
| SC-24 | Fail in Known State（以已知狀態失效） | — | 在組織定義之失效類型發生時以組織定義之已知狀態失效，保存組織定義之系統狀態資訊。 |
| SC-25 | Thin Nodes（精簡節點） | — | 在組織定義之系統元件中採用最小功能與資訊儲存。 |
| SC-26 | Decoys（誘餌） | — | 採用組織定義之誘餌元件以偵測惡意活動之跡象。 |
| SC-27 | Platform-independent Applications（平台無關應用） | — | 採用組織定義之平台無關應用。 |
| SC-28 | Protection of Information at Rest（靜態資訊保護） | M H | 保護組織定義之靜態資訊之機密性及/或完整性。 |
| SC-29 | Heterogeneity（異質性） | — | 在系統實施中採用多樣化的資訊技術以降低同質性帶來之風險。 |
| SC-30 | Concealment and Misdirection（隱蔽與誤導） | — | 採用組織定義之隱蔽與誤導技術以干擾與迷惑攻擊者。 |
| SC-31 | Covert Channel Analysis（隱匿通道分析） | — | 對組織定義之系統元件之通訊通道執行隱匿通道分析，以識別已知的儲存與時序隱匿通道。 |
| SC-32 | System Partitioning（系統分割） | — | 將系統分割為組織定義之系統元件，置於不同的實體域或環境中。 |
| SC-34 | Non-modifiable Executable Programs（不可修改之可執行程式） | — | 從組織定義之系統元件上之不可寫入儲存媒體載入並執行作業環境與安全相關軟體元件。 |
| SC-35 | External Malicious Code Identification（外部惡意程式碼識別） | — | 在組織定義之系統元件中含入可被外部（到系統的）惡意程式碼偵測的探測元件。 |
| SC-36 | Distributed Processing and Storage（分散式處理與儲存） | — | 將處理與儲存元件分散於多個組織定義之實體位置。 |
| SC-37 | Out-of-band Channels（帶外通道） | — | 對組織定義之資訊、系統元件或裝置採用組織定義之帶外通道進行實體交付或電子傳輸。 |
| SC-38 | Operations Security（作業安全） | — | 對系統採用組織定義之作業安全保護措施以保護關鍵組織資訊。 |
| SC-39 | Process Isolation（行程隔離） | L M H | 為每個執行中之行程維護獨立的執行域。 |
| SC-40 | Wireless Link Protection（無線連結保護） | — | 保護內部和外部無線連結免受組織定義之信號參數攻擊類型。 |
| SC-41 | Port and I/O Device Access（連接埠與 I/O 裝置存取） | — | 在組織定義之系統元件上實體或邏輯停用或移除組織定義之連線連接埠或 I/O 裝置。 |
| SC-42 | Sensor Capability and Data（感測器能力與資料） | — | 禁止組織定義之感測器能力之遠端啟動，並向位於感測器附近之使用者提供組織定義之使用指示。 |
| SC-43 | Usage Restrictions（使用限制） | — | 依據組織定義之限制及實施指引使用組織定義之系統元件。 |
| SC-44 | Detonation Chambers（引爆室/沙箱） | — | 採用引爆室能力以自動識別與分析多種應用類型中之惡意程式碼。 |
| SC-45 | System Time Synchronization（系統時間同步） | M H | 將系統時鐘與組織定義之權威時間來源同步。 |
| SC-46 | Cross Domain Policy Enforcement（跨域政策執行） | — | 對組織定義之政策實施跨域政策執行。 |
| SC-47 | Alternate Communications Paths（替代通訊路徑） | — | 建立組織定義之替代通訊路徑以支援操作持續性。 |
| SC-48 | Sensor Relocation（感測器重新配置） | — | 以組織定義之頻率或在組織定義之事件或條件發生時重新配置組織定義之感測器。 |
| SC-49 | Hardware-enforced Separation and Policy Enforcement（硬體強制分離與政策執行） | — | 在組織定義之系統元件中實施基於硬體之分離與政策執行機制。 |
| SC-50 | Software-enforced Separation and Policy Enforcement（軟體強制分離與政策執行） | — | 在組織定義之系統元件中實施基於軟體之分離與政策執行機制。 |
| SC-51 | Hardware-based Protection（硬體基礎保護） | — | 為組織定義之韌體元件實施基於硬體之保護機制。 |

---

## SI — System and Information Integrity（系統與資訊完整性）

漏洞修補、惡意程式碼防護、系統監控、輸入驗證、錯誤處理、去識別化等控制。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| SI-1 | Policy and Procedures（政策與程序） | L M H P | 制定、記錄並傳達系統與資訊完整性政策及程序。 |
| SI-2 | Flaw Remediation（漏洞修補） | L M H | 識別、報告並矯正系統漏洞；在組織定義之時間內安裝安全相關軟體與韌體更新；將漏洞修補納入組態管理流程。 |
| SI-3 | Malicious Code Protection（惡意程式碼保護） | L M H | 在系統關鍵點實施惡意程式碼保護機制以偵測並根除惡意程式碼；在新版本可用時更新機制。 |
| SI-4 | System Monitoring（系統監控） | L M H | 監控系統以偵測攻擊與潛在攻擊指標及未授權連線；識別系統的未授權使用。 |
| SI-5 | Security Alerts, Advisories, and Directives（安全警報、諮詢與指令） | L M H | 從組織定義之外部組織持續接收系統安全警報、諮詢與指令；產生並傳播內部安全警報。 |
| SI-6 | Security and Privacy Function Verification（安全與隱私功能驗證） | H | 驗證組織定義之安全與隱私功能之正確運作；在組織定義之轉換狀態下執行驗證。 |
| SI-7 | Software, Firmware, and Information Integrity（軟體、韌體與資訊完整性） | H | 採用完整性驗證工具偵測組織定義之軟體、韌體與資訊的未授權變更。 |
| SI-8 | Spam Protection（垃圾郵件保護） | M H | 在系統進出點及網路邊界採用垃圾郵件保護機制以偵測並對未請求之訊息採取行動。 |
| SI-10 | Information Input Validation（資訊輸入驗證） | M H | 對組織定義之資訊輸入進行檢查以驗證其有效性。 |
| SI-11 | Error Handling（錯誤處理） | M H | 產生能提供矯正行動所需資訊之錯誤訊息，但不揭露可能被攻擊者利用之資訊。 |
| SI-12 | Information Management and Retention（資訊管理與保留） | L M H P | 依據適用法律、行政命令、指令、法規、政策、標準、指引及操作需求管理並保留系統內之資訊與資訊輸出。 |
| SI-13 | Predictable Failure Prevention（可預測失效預防） | — | 判定組織定義之系統元件之平均故障時間，並對可能之系統失效提供替代元件與通知。 |
| SI-14 | Non-persistence（非持久性） | — | 實施組織定義之系統元件與服務之非持久性，於組織定義之事件後啟動終止並重新初始化。 |
| SI-15 | Information Output Filtering（資訊輸出過濾） | — | 對系統輸出進行資訊過濾以驗證有效性。 |
| SI-16 | Memory Protection（記憶體保護） | M H | 實施組織定義之安全保護措施保護系統記憶體免受未授權之程式碼執行。 |
| SI-17 | Fail-safe Procedures（故障安全程序） | — | 在組織定義之失效條件發生時實施組織定義之故障安全程序。 |
| SI-18 | PII Quality Operations（個資品質作業） | P | 在組織定義之點與頻率檢查個資之準確性、相關性、及時性與完整性；矯正或刪除不正確或過時之個資。 |
| SI-19 | De-identification（去識別化） | P | 從組織定義之資料集移除個人可識別元素；評估去識別化之有效性。 |
| SI-20 | Tainting（污染標記） | — | 將組織定義之系統或系統元件接收之資料嵌入污染標記，以支援後續的資訊來源追蹤。 |
| SI-21 | Information Refresh（資訊更新） | — | 以組織定義之頻率或在組織定義之事件後，從可信來源重新整理組織定義之資訊。 |
| SI-22 | Information Diversity（資訊多樣性） | — | 使用組織定義之替代資訊來源以達成組織定義之安全功能。 |
| SI-23 | Information Fragmentation（資訊碎片化） | — | 根據組織定義之情況對組織定義之資訊進行碎片化處理。 |

---

## SR — Supply Chain Risk Management（供應鏈風險管理）🆕

Rev 5 新增家族，涵蓋供應鏈控制流程、來源追溯、供應商評估、防篡改與元件真偽性等。

| ID | 名稱 | 基線 | 說明 |
|----|------|------|------|
| SR-1 | Policy and Procedures（政策與程序） | L M H | 制定、記錄並傳達供應鏈風險管理政策及程序。 |
| SR-2 | Supply Chain Risk Management Plan（供應鏈風險管理計畫） | M H | 制定系統、系統元件或系統服務之供應鏈風險管理計畫；以組織定義之頻率審查與更新。 |
| SR-3 | Supply Chain Controls and Processes（供應鏈控制與流程） | M H | 建立用於降低供應鏈風險之流程，以識別並解決系統/元件/服務中之弱點或缺陷。 |
| SR-4 | Provenance（來源追溯） | — | 記錄、監控並維護組織定義之系統、元件與資料的有效來源。 |
| SR-5 | Acquisition Strategies, Tools, and Methods（取得策略、工具與方法） | M H | 採用組織定義之取得策略、合約工具與採購方法以保護供應鏈免受威脅。 |
| SR-6 | Supplier Assessments and Reviews（供應商評估與審查） | M H | 以組織定義之頻率評估並審查組織定義之供應商與供應鏈之風險。 |
| SR-7 | Supply Chain Operations Security（供應鏈作業安全） | — | 對供應鏈採用組織定義之作業安全控制與保護措施。 |
| SR-8 | Notification Agreements（通知協議） | M H | 與組織定義之供應商建立協議與程序以通知組織定義之供應鏈妥協事件。 |
| SR-9 | Tamper Resistance and Detection（防篡改抗性與偵測） | — | 對組織定義之系統元件實施防篡改技術與偵測機制。 |
| SR-10 | Inspection of Systems or Components（系統或元件檢查） | — | 在組織定義之情況下檢查組織定義之系統或系統元件以偵測篡改。 |
| SR-11 | Component Authenticity（元件真偽性） | M H | 開發並實施反仿冒政策；採用組織定義之技術與方法訓練人員偵測仿冒元件。 |
| SR-12 | Component Disposal（元件處置） | M H | 使用組織定義之技術與方法處置組織定義之資料、文件、工具或系統元件。 |

---

## 附錄：基線等級速查

> **L** = Low Baseline（低）— 149 個控制項（最低保護等級）  
> **M** = Moderate Baseline（中）— 287~304 個控制項  
> **H** = High Baseline（高）— 370~392 個控制項  
> **P** = Privacy Baseline（隱私）— 獨立於影響等級之隱私控制基線  
> **—** = 不屬於任何基線（按需選用）

基線的詳細對照請參閱 **NIST SP 800-53B** *Control Baselines for Information Systems and Organizations*。

---

> **參考來源**: NIST SP 800-53 Rev 5, Update 1  
> https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final  
> https://csf.tools/reference/nist-sp-800-53/r5/  
>  
> **注意事項**:  
> 1. 本文件列出所有基礎控制項（Base Controls），每個基礎控制項下可包含多個控制增強項（Control Enhancements），如 AC-2(1)~AC-2(13)，增強項未在此文件展開。  
> 2. 部分控制項編號存在跳號（如 AC-13、AC-15、AU-15、CP-5 等），係歷次修訂中被撤銷或整合之正常結果。  
> 3. 「說明」欄位為控制項要求之摘要，完整控制陳述請參閱 NIST 原始出版物。