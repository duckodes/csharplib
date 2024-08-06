var libdocument = (function () {
    return {
        init: init
    };
    function init() {
        if (paramname.getParameterByName("v", window.location.href)) {
            if (paramname.getParameterByName("v", window.location.href).includes("AESEncryption")) {
                AddDocument('AES 加密解密', '作用: 加密資料來源',
                    `comming soon..:
                    `, 'Resource/OriginFile/csharpFile/Security/AESEncryption.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("AudioCollection")) {
                AddDocument('AudioCollection 音頻驅動器', '作用: 可設置需要的音频源(AudioSource)，及對應的音頻數據資料源(AudioClip)',
                    ` # Inspector Display Variable

                    Audio Collector: 該List包含兩個置入，為AudioSource、AudioClip`, 'Resource/OriginFile/csharpFile/Audio/AudioCollection.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("Counter")) {
                AddDocument('Counter 計數工具', '作用: 可產生計數 GUI',
                    `# Inspector Display Variable
                    
                    Settings: 選項有UI、Normal，UI可調整GUI介面， Normal可調整變數等功能

                    Display: 該選項是控制數字的顯示方式，可顯示SI制或是只有秒，帶有Decimal 2為十進制，會顯示兩位數，如: 01、02

                    Option: KeyCode是由按鍵控制計數方式，DeltaTime是由時間控制

                    Calculation: 可選擇該數字是要增加還是減少

                    Default Count: 默認計數

                    Fluctuation: 計數要增加或減少的值
                    
                    Per: 頻率，若為"1"該計數以每"1"秒運算一次，以此類推

                    Min Max: 設定計數最小值與最大值`, 'Resource/OriginFile/csharpFile/UI/Counter/Counter.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("DraggablePanel")) {
                AddDocument('DraggablePanel 浮動窗口', '作用: 可產生GUI.Window生成的浮動窗口',
                    `# Inspector Display Variable

                    Rect: 調整初始位置及大小

                    Title Size: 標題的大小

                    Text Anchor: 標題文字位置

                    Min Size: 此拖動視窗可縮放的最小大小

                    Resize Cursor: 當滑鼠移動進入右下角可縮放區域時，顯示的滑鼠樣式`, 'Resource/OriginFile/csharpFile/UI/DraggablePanel/DraggablePanel.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("FloatAES")) {
                AddDocument('FloatAES 浮點AES使用', '作用: 加密資料來源',
                    `comming soon..:
                    `, 'Resource/OriginFile/csharpFile/Security/FloatAES.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("InitializationEvent")) {
                AddDocument('Initialization Event 生命週期初始化事件', '作用: 可新增需要的Initialization對象作用的Event',
                    `# Inspector Display Variable

                    Add Initialization Event: 可開啟需要初始化對象的事件

                    # 再次點擊關閉並不會移除之前新增的對象，必須要移除該Event內的對象，才會移除`, 'Resource/OriginFile/csharpFile/Event/InitializationEvent.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("IntAES")) {
                AddDocument('IntAES 整數AES使用', '作用: 加密資料來源',
                    `comming soon..:
                    `, 'Resource/OriginFile/csharpFile/Security/IntAES.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("MenuGeneric")) {
                AddDocument('MenuGeneric 菜單工具', '作用: 運用UnityEditor.GenericMenu類，寫出簡易方法供使用，使用Start、Add、End方法即可完成菜單功能',
                    `# Parameter

                    position: 生成菜單位置

                    menu: 這是一個out參數，將menu給予EndMenu即可，在StartMenu與EndMenu之間也可以更改menu的設置
                    
                    menuPosition: 這也是一個out參數，將menuPosition給予EndMenu即可

                    itemName: 菜單選項的名稱

                    check: 菜單選項是否要具有打勾
                    
                    menuFunction: 菜單按下去運用方法
                    
                    # EX 1
                    StartMenu(new Vector2(0, 0), out GenericMenu menu, out Vector2 menuPosition);
                    AddMenu(menu, "Test1", false, () => { // TODO:點擊菜單作用域 });
                    EndMenu(menu, menuPosition);

                    # EX 2
                    StartMenu(out GenericMenu menu);
                    AddMenu(menu, "Test2", false, () => { // TODO:點擊菜單作用域 });
                    EndMenu(menu);

                    # 需要被放入事件當中，如: if(UnityEngine.GUILayout.Button("Test Menu"))，或是滑鼠鍵盤等事件`, 'Resource/OriginFile/csharpFile/UI/MenuGeneric/MenuGeneric.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("Searcher")) {
                Searcher(true);
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("StringAES")) {
                AddDocument('StringAES 字串AES使用', '作用: 加密資料來源',
                    `comming soon..:
                    `, 'Resource/OriginFile/csharpFile/Security/StringAES.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("Timer")) {
                AddDocument('Timer 時間軸(生命週期調整)', '作用: 生命週期Update()，進行更新次數變化',
                    `# Parameter

                    action: 在action裡面，會依照指定的時間進行變更
                    
                    per: 每幾秒更新一次update
                    
                    # EX 1
                    public class Test : MonoBehaviour
                    {
                    \t    private void Update()
                    \t    {
                    \t\t        Update(() => {
                    \t\t\t            // TODO: 每一秒更新一次
                    \t\t        }, 1);
                    \t    }
                    }
                    # EX 2
                    public class Test : MonoBehaviour
                    {
                    \t    private void Update()
                    \t    {
                    \t\t       Update((m_timer) => {
                    \t\t\t            // TODO: 每一秒更新一次
                    \t\t\t            // m_timer值，可進行m_timer判斷
                    \t\t        }, 1);
                    \t    }
                    }
                    # 初始化 Timer timer = new Timer() => m_timer = 0.0f;`, 'Resource/OriginFile/csharpFile/Timer/Timer.cs');
            }
            else if (paramname.getParameterByName("v", window.location.href).includes("UI-Sizer")) {
                UISizer(true);
            }
        }
        else {
            window.location.href = "UGPrivateLibrary.html";
        }
    }
    function AddDocument(title, todo, info, csfileUrl) {
        var src = '<!-- Code -->' +
            '<pre class="re-link">' +
            '<div class="info">' +
            '<h1>' +
            title +
            '</h1>' +
            todo +
            '<code class="language-yaml" contenteditable="false">' +
            info.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;') +
            '</code>' +
            '</div>' +
            '<div id="code-copy-' + getLastSegment(csfileUrl).replace('.cs', '') + '-cs" class="no-select copy-paste">' +
            ' <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>' +
            ' copy' +
            '</div>' +
            '<code class="language-csharp" id="code-text-' + getLastSegment(csfileUrl).replace('.cs', '') + '-cs">' +
            '</code>' +
            '<div class="no-select download-file" title="下載">' +
            getLastSegment(csfileUrl) +
            '</div>' +
            '</pre>';
        document.body.innerHTML += src;
        redis();
        setTimeout(() => {
            fileutils.filetextinelement('code-text-' + getLastSegment(csfileUrl).replace('.cs', '') + '-cs', csfileUrl, (t, text) => {
                t.textContent = text;
            }, () => {
                copycode("code-copy-" + getLastSegment(csfileUrl).replace('.cs', '') + "-cs", "code-text-" + getLastSegment(csfileUrl).replace('.cs', '') + "-cs");
                var downloadFiler = document.querySelectorAll('.download-file');
                downloadFiler.forEach(function (e) {
                    e.addEventListener("click", () => {
                        if (e.innerText === getLastSegment(csfileUrl)) {
                            fileutils.download(getLastSegment(csfileUrl), csfileUrl);
                        }
                    });
                });
                hljs.highlightAll();
                liboption.init();
            });
        }, 100);
        function getLastSegment(path) {
            return path.slice(path.lastIndexOf('/') + 1);
        }
    }
    function Searcher(ck) {
        var src = '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>Searcher搜尋</h2>' +
            '<h6>' +
            '<br><br>作用: 提供簡易搜尋功能方法' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Variable ===&gt;&gt;' +
            '<br><br>m_keyword -- 搜尋的文字' +
            '<br><br>source -- 搜尋資料來源陣列' +
            '<br><br>action -- 作用方法' +
            '<br><br>stringComparison -- 字符串比較，如: 忽略大小寫' +
            '</span>' +
            '</h6>' +
            '<br><br><br><br></div><div id="code-copy-Searcher-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-Searcher-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">Searcher.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>示範應用Searcher.cs</h2>' +
            '<h6>' +
            '<br><br>作用: 提供簡易搜尋功能方法' +

            '<br><br><br>以 Unity GUI System 作為範例' +
            '</h6>' +
            '<br><br><br></div><div id="code-copy-CustomSearch-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-CustomSearch-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">CustomSearch.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>Search</h2>' +
            '<h6>' +
            '<br><br>作用: 可產生搜尋GUI面板' +

            '<br><br><br>使用: ' +
            '<br>1.此類需要結合Searcher.cs，應用以上方法' +
            '<br>2.置入unity空物件' +
            '<br>3.Source填入資料來源' +
            '<span class="mark-place">' +
            '<br><br><br>&lt;&lt;=== Unity Inspector Display Variable=== &gt;&gt;' +
            '<br><br>On Action(String) Event: 當搜尋列按下第n項button時，傳入第n項的字符串' +
            '<br><br>Inspector 操作項 X, Y: 以Screen Resulotion的相對位置，腳本內也有相對應的方法設置X, Y 值' +
            '<br><br>..Option: 可更改UI介面設置' +
            '</span>' +
            '</h6>' +
            '<br><br><br></div><div id="code-copy-Search-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-Search-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">Search.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>Search Extension1.0.2</h2>' +
            '<h6>' +
            '<br><br>作用: Search增強版 版本:1.0.2' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity New Inspector Display Variable ===&gt;&gt;' +
            '<br><br>EmptyHide: 當輸入框無任何字符，開啟或關閉生成的來源按鈕' +
            '<br>*註記(例如: 搜尋框一開始隱藏所有來源、指令框會一開始出現所有指令等等..用法)' +
            '<br><br>Background Color, Background Texture2D: 調整背景顏色、背景貼圖' +
            '<br><br>Show Slider: 開啟或關閉滑條的顯示，如關閉Slider依然可以使用，僅不會看到外觀樣式' +
            '</span>' +
            '</h6>' +
            '<div  style="white-space: nowrap;">' +
            '</div>' +
            '<br><br><br><br><br></div><div id="code-copy-SearchEx1-0-2-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-SearchEx1-0-2-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">Search.cs(1.0.2)   </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>Search Extension1.0.3</h2>' +
            '<h6>' +
            '<br><br>作用: Search增強版 版本:1.0.3' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity New Inspector Display Variable ===&gt;&gt;' +
            '<br><br>UsePercentage(m_usePercentage): 此變數是用來轉換X(m_x)跟Y(m_y)的百分比' +
            '</span>' +
            '<span class="mark-pinkred">' +
            '<br><br><br><br>&lt;&lt;=== New Function ===&gt;&gt;' +
            '<br><br>GetSearchRect(): 用來提供Search面板的Rect，方便外部使用' +
            '<br><br>SetUsePercentage(bool use): 用來設置UsePercentage(m_usePercentage)的值' +
            '<br><br>SetShow(bool visible): 此為版本更新重點，該布爾值控制OnGUI是否要進行繪畫，其餘方法條件均會起作用，' +
            '<br>如果是以enabled來控制顯示，該腳本其餘方法條件均會停止作用。' +
            '<br><br>SetOnMouse(): 此為版本更新第二重點，此方法會直接將X(m_x)與Y(m_y)百分比設無，接著將Search的位置填充進Mouse的位置' +
            '</span>' +
            '</h6>' +
            '<div  style="white-space: nowrap;">' +
            '</div>' +
            '<br><br><br><br><br></div><div id="code-copy-SearchEx1-0-3-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-SearchEx1-0-3-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">Search.cs(1.0.3)   </div></pre>';
        document.body.innerHTML += src;
        redis(300);
        setTimeout(() => {
            fileutils.filetextinelements(['code-text-Searcher-cs',
                'code-text-CustomSearch-cs',
                'code-text-Search-cs',
                'code-text-SearchEx1-0-2-cs',
                'code-text-SearchEx1-0-3-cs'],
                ['Resource/OriginFile/csharpFile/UI/Searcher/Searcher.cs',
                    'Resource/OriginFile/csharpFile/UI/Searcher/CustomSearch.cs',
                    'Resource/OriginFile/csharpFile/UI/Searcher/Search.cs',
                    'Resource/OriginFile/csharpFile/UI/Searcher/SearchExtension/1.0.2/Search.cs',
                    'Resource/OriginFile/csharpFile/UI/Searcher/SearchExtension/1.0.3/Search.cs'], (t, text) => {
                        t.textContent = text;
                    }, () => {
                        if (ck) {
                            copycode("code-copy-Searcher-cs", "code-text-Searcher-cs");
                            copycode("code-copy-CustomSearch-cs", "code-text-CustomSearch-cs");
                            copycode("code-copy-Search-cs", "code-text-Search-cs");
                            copycode("code-copy-SearchEx1-0-2-cs", "code-text-SearchEx1-0-2-cs");
                            copycode("code-copy-SearchEx1-0-3-cs", "code-text-SearchEx1-0-3-cs");
                            var downloadFiler = document.querySelectorAll('.download-file');
                            downloadFiler.forEach(function (e) {
                                e.addEventListener("click", () => {
                                    if (e.innerText === "Searcher.cs  ") {
                                        fileutils.download('Searcher.cs', 'Resource/OriginFile/csharpFile/UI/Searcher/Searcher.cs');
                                    }
                                    if (e.innerText === "CustomSearch.cs  ") {
                                        fileutils.download('CustomSearch.cs', 'Resource/OriginFile/csharpFile/UI/Searcher/CustomSearch.cs');
                                    }
                                    if (e.innerText === "Search.cs  ") {
                                        fileutils.download('Search.cs', 'Resource/OriginFile/csharpFile/UI/Searcher/Search.cs');
                                    }
                                    if (e.innerText.includes('Search.cs(1.0.2)')) {
                                        fileutils.download('Search.cs', 'Resource/OriginFile/csharpFile/UI/Searcher/SearchExtension/1.0.2/Search.cs');
                                    }
                                    if (e.innerText.includes('Search.cs(1.0.3)')) {
                                        fileutils.download('Search.cs', 'Resource/OriginFile/csharpFile/UI/Searcher/SearchExtension/1.0.3/Search.cs');
                                    }
                                });
                            });
                            hljs.highlightAll();
                        }
                    });
        }, 100);
    }
    function UISizer(ck) {
        var src = '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>UI-Sizer 介面縮放</h2>' +
            '<h6>' +
            '<br><br>作用: 使用 RectTransformSizer.cs 组件至 unity uGUI' +
            '<br>可快速使uGUI包含的RectTransform核心組件，進行簡易的用戶互動' +
            '<br><span class="mark-pinkred">(如要進行快速整體變形，應使用 RectTransformScaler.cs 組件。使用該組件，僅能讓當層RectTransform進行SizeDelta變更，因此如果變更需Text或TMP組件，需要使用LegacyTextSizer.cs或是TMPTextSizer.cs)</span>' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity Inspector Display Variable ===&gt;&gt;' +
            '<br><br>Rect Transform: 選擇要變更大小的核心組件' +
            '<br><br>Option: 更改欲變更大小的互動方式' +
            '<br><br>Mutiply Size: 相乘大小，該向量x與y是以原大小RectTransform組件內sizeDelta的x與y分別作乘積' +
            '<br><br>Animation Speed: 動畫速度' +
            '<br><br>Enter Speed: 互動\'開始\'的動畫曲線' +
            '<br><br>Leave Speed: 互動\'結束\'的動畫曲線' +
            '</span>' +
            '</h6>' +
            '<br><br><br><br></div><div id="code-copy-RectTransformSizer-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-RectTransformSizer-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">RectTransformSizer.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>RectTransformScaler</h2>' +
            '<h6>' +
            '<br><br>作用: 使用 RectTransformScaler.cs 组件至 unity uGUI' +
            '<br>可快速使uGUI包含的RectTransform核心組件，進行簡易的用戶互動' +
            '<br><span class="mark-pinkred">(該組件是以 RectTransform 的 Scale 進行變更，因此父關係層能夠完整的控制子層的縮放。)</span>' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity Inspector Display Variable ===&gt;&gt;' +
            '<br><br>Rect Transform: 選擇要變更大小的核心組件' +
            '<br><br>Option: 更改欲變更大小的互動方式' +
            '<br><br>Mutiply Size: 相乘大小，該向量x與y是以原大小RectTransform組件內 Local Scale 的x與y分別作乘積' +
            '<br><br>Animation Speed: 動畫速度' +
            '<br><br>Enter Speed: 互動\'開始\'的動畫曲線' +
            '<br><br>Leave Speed: 互動\'結束\'的動畫曲線' +
            '</span>' +
            '</h6>' +
            '<br><br><br><br></div><div id="code-copy-RectTransformScaler-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-RectTransformScaler-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">RectTransformScaler.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>LegacyTextSizer</h2>' +
            '<h6>' +
            '<br><br>作用: 使用 LegacyTextSizer.cs 组件至 unity uGUI' +
            '<br>可快速使uGUI包含的Text組件，進行簡易的互動' +
            '<br><span class="mark-pinkred">(該組件以 Text 組件的 FontSize 進行變更，因此只能變更Font大小。如需X或Y縮放需使用RectTransformScaler.cs。)</span>' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity Inspector Display Variable ===&gt;&gt;' +
            '<br><br>Rect Transform: 選擇要變更大小的核心組件' +
            '<br><br>Option: 更改欲變更大小的互動方式' +
            '<br><br>Mutiply Size: 相乘大小，該浮點與Text組件 FontSize 默認值，作乘積' +
            '<br><br>Animation Speed: 動畫速度' +
            '<br><br>Enter Speed: 互動\'開始\'的動畫曲線' +
            '<br><br>Leave Speed: 互動\'結束\'的動畫曲線' +
            '</span>' +
            '</h6>' +
            '<br><br><br><br></div><div id="code-copy-LegacyTextSizer-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-LegacyTextSizer-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">LegacyTextSizer.cs  </div></pre>' +

            '<!-- Code -->' +
            '<pre class="re-link"><div class="no-select" style="color: white;width: 100%; margin-bottom: -50px;text-align: center;white-space: pre-line;">' +
            '<br><br><br><h2>TMPTextSizer</h2>' +
            '<h6>' +
            '<br><br>作用: 使用 TMPTextSizer.cs 组件至 unity uGUI' +
            '<br>可快速使TextMeshPro包含的TextMeshProUGUI組件，進行簡易的互動' +
            '<br><span class="mark-pinkred">(該組件以 TextMeshProUGUI 組件的 FontSize 進行變更，因此只能變更Font大小。如需X或Y縮放需使用RectTransformScaler.cs。)</span>' +

            '<span class="mark-place">' +
            '<br><br><br><br>&lt;&lt;=== Unity Inspector Display Variable ===&gt;&gt;' +
            '<br><br>Rect Transform: 選擇要變更大小的核心組件' +
            '<br><br>Option: 更改欲變更大小的互動方式' +
            '<br><br>Mutiply Size: 相乘大小，該浮點與TextMeshProUGUI組件 FontSize 默認值，作乘積' +
            '<br><br>Animation Speed: 動畫速度' +
            '<br><br>Enter Speed: 互動\'開始\'的動畫曲線' +
            '<br><br>Leave Speed: 互動\'結束\'的動畫曲線' +
            '</span>' +
            '</h6>' +
            '<br><br><br><br></div><div id="code-copy-TMPTextSizer-cs" class="no-select" style="z-index: 1;cursor: pointer;color: white;background-color: #1e1e1e;position: relative;margin-bottom: 0px;height: 21px; border-top-left-radius: 7px;border-top-right-radius: 7px;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> copy </div><code class="language-csharp" id="code-text-TMPTextSizer-cs">' +
            '</code><div class="no-select download-file" style="cursor: pointer;z-index: 0.5;color: white;background-color: #303030;margin-top: 0px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;display: flex;align-items: center;justify-content: right;white-space: pre-wrap;" title="下載">TMPTextSizer.cs  </div></pre>';
        document.body.innerHTML += src;
        redis(300);
        setTimeout(() => {
            fileutils.filetextinelements(['code-text-RectTransformSizer-cs',
                'code-text-RectTransformScaler-cs',
                'code-text-LegacyTextSizer-cs',
                'code-text-TMPTextSizer-cs'],
                ['Resource/OriginFile/csharpFile/UI/Sizer/RectTransformSizer.cs',
                    'Resource/OriginFile/csharpFile/UI/Sizer/RectTransformScaler.cs',
                    'Resource/OriginFile/csharpFile/UI/Sizer/LegacyTextSizer.cs',
                    'Resource/OriginFile/csharpFile/UI/Sizer/TMPTextSizer.cs'], (t, text) => {
                        t.textContent = text;
                    }, () => {
                        if (ck) {
                            copycode("code-copy-RectTransformSizer-cs", "code-text-RectTransformSizer-cs");
                            copycode("code-copy-RectTransformScaler-cs", "code-text-RectTransformScaler-cs");
                            copycode("code-copy-LegacyTextSizer-cs", "code-text-LegacyTextSizer-cs");
                            copycode("code-copy-TMPTextSizer-cs", "code-text-TMPTextSizer-cs");
                            var downloadFiler = document.querySelectorAll('.download-file');
                            downloadFiler.forEach(function (e) {
                                e.addEventListener("click", () => {
                                    if (e.innerText === "RectTransformSizer.cs  ") {
                                        fileutils.download('RectTransformSizer.cs', 'Resource/OriginFile/csharpFile/UI/Sizer/RectTransformSizer.cs');
                                    }
                                    if (e.innerText === "RectTransformScaler.cs  ") {
                                        fileutils.download('RectTransformScaler.cs', 'Resource/OriginFile/csharpFile/UI/Sizer/RectTransformScaler.cs');
                                    }
                                    if (e.innerText === "LegacyTextSizer.cs  ") {
                                        fileutils.download('LegacyTextSizer.cs', 'Resource/OriginFile/csharpFile/UI/Sizer/LegacyTextSizer.cs');
                                    }
                                    if (e.innerText === "TMPTextSizer.cs  ") {
                                        fileutils.download('TMPTextSizer.cs', 'Resource/OriginFile/csharpFile/UI/Sizer/TMPTextSizer.cs');
                                    }
                                });
                            });
                            hljs.highlightAll();
                        }
                    });
        }, 100);
    }
    function redis(t = 150) {
        var elmt = document.querySelectorAll('.re-link');
        elmt.forEach(element => {
            element.style.display = "none";
            setTimeout(() => {
                element.style.display = "none";
                element.removeAttribute("style");
            }, t);
        });
    }
}());
libdocument.init();