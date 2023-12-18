using UnityEngine;

public class Counter : MonoBehaviour
{
    #region Editor
#if UNITY_EDITOR
    [UnityEditor.CustomEditor(typeof(Counter))]
    public class CounterEditor : UnityEditor.Editor
    {
        UnityEditor.SerializedProperty m_Settings;
        UnityEditor.SerializedProperty m_Display;

        UnityEditor.SerializedProperty m_Option;
        UnityEditor.SerializedProperty m_InputState;
        UnityEditor.SerializedProperty m_Key;
        UnityEditor.SerializedProperty m_Calculation;
        UnityEditor.SerializedProperty m_Fluctuation;
        UnityEditor.SerializedProperty m_Min, m_Max;
        UnityEditor.SerializedProperty m_DefaultCount;
        UnityEditor.SerializedProperty m_Per;

        UnityEditor.SerializedProperty m_Font;
        UnityEditor.SerializedProperty m_FontSize;
        UnityEditor.SerializedProperty m_FontColorNormal;
        UnityEditor.SerializedProperty m_FontColorHover;
        UnityEditor.SerializedProperty m_Position;

        UnityEditor.SerializedProperty m_CurrentCount;

        private Color m_LeftTop = Color.red;
        private Color m_RightTop = Color.red;
        private Color m_LeftBottom = Color.red;
        private Color m_RightBottom = Color.red;

        private Color m_MiddleTop = Color.red;
        private Color m_MiddleBottom = Color.red;
        private Color m_LeftMiddle = Color.red;
        private Color m_RightMiddle = Color.red;

        private Color m_MiddleMiddle = Color.green;
        private void OnEnable()
        {
            m_Settings = serializedObject.FindProperty("m_Settings");
            m_Display = serializedObject.FindProperty("m_Display");

            m_Option = serializedObject.FindProperty("m_Option");
            m_InputState = serializedObject.FindProperty("m_InputState");
            m_Key = serializedObject.FindProperty("m_Key");
            m_Calculation = serializedObject.FindProperty("m_Calculation");
            m_Fluctuation = serializedObject.FindProperty("m_Fluctuation");
            m_Min = serializedObject.FindProperty("m_Min");
            m_Max = serializedObject.FindProperty("m_Max");
            m_DefaultCount = serializedObject.FindProperty("m_DefaultCount");
            m_Per = serializedObject.FindProperty("m_Per");

            m_Font = serializedObject.FindProperty("m_Font");
            m_FontSize = serializedObject.FindProperty("m_FontSize");
            m_FontColorNormal = serializedObject.FindProperty("m_FontColorNormal");
            m_FontColorHover = serializedObject.FindProperty("m_FontColorHover");
            m_Position = serializedObject.FindProperty("m_Position");

            m_CurrentCount = serializedObject.FindProperty("m_CurrentCount");

            CheckActiveColor();
        }

        public override void OnInspectorGUI()
        {
            serializedObject.Update();
            
            UnityEditor.EditorGUILayout.PropertyField(m_Settings);
            UnityEditor.EditorGUILayout.Space(20);

            Settings settings = (Settings)m_Settings.enumValueIndex;
            switch (settings)
            {
                case Settings.Normal:
                    UnityEditor.EditorGUILayout.PropertyField(m_Display);
                    UnityEditor.EditorGUILayout.PropertyField(m_Option);

                    Option option = (Option)m_Option.enumValueIndex;

                    switch (option)
                    {
                        case Option.KeyCode:
                            UnityEditor.EditorGUILayout.PropertyField(m_InputState);
                            InputState inputState = (InputState)m_InputState.enumValueIndex;
                            switch (inputState)
                            {
                                case InputState.Single:
                                    UnityEditor.EditorGUILayout.PropertyField(m_Key);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Calculation);
                                    UnityEditor.EditorGUILayout.PropertyField(m_DefaultCount);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Fluctuation);
                                    NewLabelWidth(30, out float minmax);
                                    UnityEditor.EditorGUILayout.BeginHorizontal();
                                    UnityEditor.EditorGUILayout.PropertyField(m_Min);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Max);
                                    UnityEditor.EditorGUILayout.EndHorizontal();
                                    UnityEditor.EditorGUIUtility.labelWidth = minmax;
                                    break;
                                case InputState.AfterSingle:
                                    UnityEditor.EditorGUILayout.PropertyField(m_Key);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Calculation);
                                    UnityEditor.EditorGUILayout.PropertyField(m_DefaultCount);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Fluctuation);
                                    NewLabelWidth(30, out float minmax1);
                                    UnityEditor.EditorGUILayout.BeginHorizontal();
                                    UnityEditor.EditorGUILayout.PropertyField(m_Min);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Max);
                                    UnityEditor.EditorGUILayout.EndHorizontal();
                                    UnityEditor.EditorGUIUtility.labelWidth = minmax1;
                                    break;
                                case InputState.Continuous:
                                    UnityEditor.EditorGUILayout.PropertyField(m_Key);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Calculation);
                                    UnityEditor.EditorGUILayout.PropertyField(m_DefaultCount);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Fluctuation);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Per);
                                    NewLabelWidth(30, out float minmax2);
                                    UnityEditor.EditorGUILayout.BeginHorizontal();
                                    UnityEditor.EditorGUILayout.PropertyField(m_Min);
                                    UnityEditor.EditorGUILayout.PropertyField(m_Max);
                                    UnityEditor.EditorGUILayout.EndHorizontal();
                                    UnityEditor.EditorGUIUtility.labelWidth = minmax2;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case Option.DeltaTime:
                            UnityEditor.EditorGUILayout.PropertyField(m_Calculation);
                            UnityEditor.EditorGUILayout.PropertyField(m_DefaultCount);
                            UnityEditor.EditorGUILayout.PropertyField(m_Fluctuation);
                            UnityEditor.EditorGUILayout.PropertyField(m_Per);
                            NewLabelWidth(30, out float minmax3);
                            UnityEditor.EditorGUILayout.BeginHorizontal();
                            UnityEditor.EditorGUILayout.PropertyField(m_Min);
                            UnityEditor.EditorGUILayout.PropertyField(m_Max);
                            UnityEditor.EditorGUILayout.EndHorizontal();
                            UnityEditor.EditorGUIUtility.labelWidth = minmax3;
                            break;
                        default:
                            break;
                    }
                    break;
                case Settings.UI:
                    UnityEditor.EditorGUILayout.PropertyField(m_Font);
                    UnityEditor.EditorGUILayout.PropertyField(m_FontSize);
                    UnityEditor.EditorGUILayout.PropertyField(m_FontColorNormal);
                    UnityEditor.EditorGUILayout.PropertyField(m_FontColorHover);

                    GUILayout.BeginVertical();
                    GUILayout.Space(Screen.currentResolution.height / 5);
                    int mainScale = 7;
                    Rect windowView = new Rect(Screen.width / 2 - Screen.currentResolution.width / (mainScale * 2), 150, Screen.currentResolution.width / mainScale, Screen.currentResolution.height / mainScale);
                    GUIStyle labelStyle = new GUIStyle(GUI.skin.label);
                    GUIContent LabelText = new GUIContent("Position");
                    Vector2 labelSize = labelStyle.CalcSize(LabelText);
                    GUI.Label(new Rect(Screen.width / 2 - labelSize.x / 2, windowView.y - 20, Screen.width, UnityEditor.EditorGUIUtility.singleLineHeight), LabelText, labelStyle);
                    UnityEditor.EditorGUI.DrawRect(windowView, new Color(0.8f, 0.8f, 0.8f));

                    Rect leftTop = new Rect(windowView.x, windowView.y, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(leftTop, m_LeftTop);
                    Rect rightTop = new Rect(windowView.xMax - windowView.width / mainScale, windowView.y, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(rightTop, m_RightTop);
                    Rect leftBottom = new Rect(windowView.x, windowView.yMax - windowView.height / mainScale, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(leftBottom, m_LeftBottom);
                    Rect rightBottom = new Rect(windowView.xMax - windowView.width / mainScale, windowView.yMax - windowView.height / mainScale, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(rightBottom, m_RightBottom);

                    Rect middleTop = new Rect(windowView.x + windowView.width / 2 - windowView.width / (mainScale * 2), windowView.y, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(middleTop, m_MiddleTop);
                    Rect middleBottom = new Rect(windowView.x + windowView.width / 2 - windowView.width / (mainScale * 2), windowView.y + windowView.height - windowView.height / mainScale, windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(middleBottom, m_MiddleBottom);
                    Rect leftMiddle = new Rect(windowView.x, windowView.y + windowView.height / 2 - windowView.height / (mainScale * 2), windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(leftMiddle, m_LeftMiddle);
                    Rect rightMiddle = new Rect(windowView.x + windowView.width - windowView.width / mainScale, windowView.y + windowView.height / 2 - windowView.height / (mainScale * 2), windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(rightMiddle, m_RightMiddle);

                    Rect middleMiddle = new Rect(windowView.x + windowView.width / 2 - windowView.width / (mainScale * 2), windowView.y + windowView.height / 2 - windowView.height / (mainScale * 2), windowView.width / mainScale, windowView.height / mainScale);
                    UnityEditor.EditorGUI.DrawRect(middleMiddle, m_MiddleMiddle);

                    GUIStyle LabelStyle = new GUIStyle(GUI.skin.label);
                    LabelStyle.font = (Font)m_Font.objectReferenceValue;
                    LabelStyle.alignment = TextAnchor.MiddleCenter;
                    LabelStyle.fontSize = m_FontSize.intValue / mainScale;
                    LabelStyle.normal.textColor = Color.black;
                    LabelStyle.hover.textColor = Color.black;
                    ToDisplay(m_DefaultCount.intValue, out string defaultCount);
                    ToDisplay(m_Max.intValue, out string max);
                    ToDisplay(m_Min.intValue, out string min);
                    ToDisplay(m_CurrentCount.intValue, out string currentCount);
                    switch (m_Position.intValue)
                    {
                        case 0:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftTop, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftTop, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(leftTop, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(leftTop, currentCount, LabelStyle);
                            }
                            break;
                        case 1:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightTop, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightTop, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(rightTop, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(rightTop, currentCount, LabelStyle);
                            }
                            break;
                        case 2:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftBottom, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftBottom, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(leftBottom, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(leftBottom, currentCount, LabelStyle);
                            }
                            break;
                        case 3:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightBottom, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightBottom, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(rightBottom, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(rightBottom, currentCount, LabelStyle);
                            }
                            break;
                        case 4:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleTop, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleTop, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(middleTop, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(middleTop, currentCount, LabelStyle);
                            }
                            break;
                        case 5:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleBottom, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleBottom, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(middleBottom, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(middleBottom, currentCount, LabelStyle);
                            }
                            break;
                        case 6:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftMiddle, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(leftMiddle, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(leftMiddle, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(leftMiddle, currentCount, LabelStyle);
                            }
                            break;
                        case 7:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightMiddle, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(rightMiddle, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(rightMiddle, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(rightMiddle, currentCount, LabelStyle);
                            }
                            break;
                        case 8:
                            if (!Application.isPlaying)
                            {
                                if (m_DefaultCount.intValue > m_Max.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleMiddle, $"{max}", LabelStyle);
                                }
                                else if (m_DefaultCount.intValue < m_Min.intValue)
                                {
                                    UnityEditor.EditorGUI.LabelField(middleMiddle, $"{min}", LabelStyle);
                                }
                                else
                                {
                                    UnityEditor.EditorGUI.LabelField(middleMiddle, $"{defaultCount}", LabelStyle);
                                }
                            }
                            else
                            {
                                UnityEditor.EditorGUI.LabelField(middleMiddle, currentCount, LabelStyle);
                            }
                            break;
                        default:
                            break;
                    }

                    GUILayout.EndVertical();

                    UnityEditor.EditorGUIUtility.AddCursorRect(leftTop, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(rightTop, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(leftBottom, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(rightBottom, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(middleTop, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(middleBottom, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(leftMiddle, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(rightMiddle, UnityEditor.MouseCursor.Link);
                    UnityEditor.EditorGUIUtility.AddCursorRect(middleMiddle, UnityEditor.MouseCursor.Link);

                    bool mDown = Event.current.type == EventType.MouseDown && Event.current.button == 0;
                    if (leftTop.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(0, Color.green);
                        Event.current.Use();
                    }
                    if (rightTop.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(1, Color.green);
                        Event.current.Use();
                    }
                    if (leftBottom.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(2, Color.green);
                        Event.current.Use();
                    }
                    if (rightBottom.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(3, Color.green);
                        Event.current.Use();
                    }

                    if (middleTop.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(4, Color.green);
                        Event.current.Use();
                    }
                    if (middleBottom.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(5, Color.green);
                        Event.current.Use();
                    }
                    if (leftMiddle.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(6, Color.green);
                        Event.current.Use();
                    }
                    if (rightMiddle.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(7, Color.green);
                        Event.current.Use();
                    }

                    if (middleMiddle.Contains(Event.current.mousePosition) && mDown)
                    {
                        ActiveColor(8, Color.green);
                        Event.current.Use();
                    }
                    break;
                default:
                    break;
            }

            serializedObject.ApplyModifiedProperties();
        }
        private void ActiveColor(int active, Color activeColor)
        {
            switch (active)
            {
                case 0:
                    if (m_LeftTop != activeColor)
                    {
                        m_LeftTop = activeColor;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 0;
                    }
                    break;
                case 1:
                    if (m_RightTop != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = activeColor;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 1;
                    }
                    break;
                case 2:
                    if (m_LeftBottom != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = activeColor;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 2;
                    }
                    break;
                case 3:
                    if (m_RightBottom != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = activeColor;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 3;
                    }
                    break;
                case 4:
                    if (m_MiddleTop != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = activeColor;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 4;
                    }
                    break;
                case 5:
                    if (m_MiddleBottom != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = activeColor;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 5;
                    }
                    break;
                case 6:
                    if (m_LeftMiddle != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = activeColor;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 6;
                    }
                    break;
                case 7:
                    if (m_RightMiddle != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = activeColor;

                        m_MiddleMiddle = Color.red;
                        m_Position.intValue = 7;
                    }
                    break;
                case 8:
                    if (m_MiddleMiddle != activeColor)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = activeColor;
                        m_Position.intValue = 8;
                    }
                    break;
                default:
                    break;
            }
        }
        private void CheckActiveColor()
        {
            switch (m_Position.intValue)
            {
                case 0:
                    if (m_LeftTop != Color.green)
                    {
                        m_LeftTop = Color.green;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 1:
                    if (m_RightTop != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.green;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 2:
                    if (m_LeftBottom != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.green;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 3:
                    if (m_RightBottom != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.green;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 4:
                    if (m_MiddleTop != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.green;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 5:
                    if (m_MiddleBottom != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.green;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 6:
                    if (m_LeftMiddle != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.green;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 7:
                    if (m_RightMiddle != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.green;

                        m_MiddleMiddle = Color.red;
                    }
                    break;
                case 8:
                    if (m_MiddleMiddle != Color.green)
                    {
                        m_LeftTop = Color.red;
                        m_RightTop = Color.red;
                        m_LeftBottom = Color.red;
                        m_RightBottom = Color.red;

                        m_MiddleTop = Color.red;
                        m_MiddleBottom = Color.red;
                        m_LeftMiddle = Color.red;
                        m_RightMiddle = Color.red;

                        m_MiddleMiddle = Color.green;
                    }
                    break;
                default:
                    break;
            }
        }
        private void NewLabelWidth(float newWidth, out float originalLabelWidth)
        {
            originalLabelWidth = UnityEditor.EditorGUIUtility.labelWidth;
            UnityEditor.EditorGUIUtility.labelWidth = newWidth;
        }
        #region Display
        private void ToDisplay(float time, out string text)
        {
            Display display = (Display)m_Display.enumValueIndex;
            switch (display)
            {
                case Display.Normal:
                    ToS(time, out float s_sec);
                    text = $"{s_sec}";
                    break;
                case Display.NormalDecimal2:
                    ToS(time, out string s_sec_d2);
                    text = s_sec_d2;
                    break;
                case Display.SecMin:
                    ToSM(time, out float sm_sec, out float sm_min);
                    text = $"{sm_min}:{sm_sec}";
                    break;
                case Display.SecMinDecimal2:
                    ToSM(time, out string sm_sec_d2, out string sm_min_d2);
                    text = $"{sm_min_d2}:{sm_sec_d2}";
                    break;
                case Display.SI:
                    ToSI(time, out float si_sec, out float si_min, out float si_hr);
                    text = $"{si_hr}:{si_min}:{si_sec}";
                    break;
                case Display.SIDecimal2:
                    ToSI(time, out string si_sec_d2, out string si_min_d2, out string si_hr_d2);
                    text = $"{si_hr_d2}:{si_min_d2}:{si_sec_d2}";
                    break;
                case Display.Min:
                    ToM(time, out float m_min);
                    text = $"{m_min}";
                    break;
                case Display.MinDecimal2:
                    ToM(time, out string m_min_d2);
                    text = m_min_d2;
                    break;
                case Display.Hr:
                    ToH(time, out float h_hr);
                    text = $"{h_hr}";
                    break;
                case Display.HrDecimal2:
                    ToH(time, out string h_hr_d2);
                    text = h_hr_d2;
                    break;
                case Display.MinHr:
                    ToMH(time, out float mh_min, out float mh_hr);
                    text = $"{mh_hr}:{mh_min}";
                    break;
                case Display.MinHrDecimal2:
                    ToMH(time, out string mh_min_d2, out string mh_hr_d2);
                    text = $"{mh_hr_d2}:{mh_min_d2}";
                    break;
                case Display.SecHr:
                    ToSH(time, out float sh_sec, out float sh_hr);
                    text = $"{sh_hr}:{sh_sec}";
                    break;
                case Display.SecHrDecimal2:
                    ToSH(time, out string sh_sec_d2, out string sh_hr_d2);
                    text = $"{sh_hr_d2}:{sh_sec_d2}";
                    break;
                default:
                    text = string.Empty;
                    break;
            }
        }
        private void ToS(float times, out float sec)
        {
            sec = Mathf.FloorToInt(times);
        }
        private void ToS(float times, out string sec)
        {
            sec = Mathf.FloorToInt(times).ToString("D2");
        }
        private void ToSM(float times, out float sec, out float min)
        {
            sec = Mathf.FloorToInt(times % 60);
            min = Mathf.FloorToInt(times / 60);
        }
        private void ToSM(float times, out string sec, out string min)
        {
            sec = Mathf.FloorToInt(times % 60).ToString("D2");
            min = Mathf.FloorToInt(times / 60).ToString("D2");
        }
        private void ToSI(float times, out float sec, out float min, out float hr)
        {
            sec = Mathf.FloorToInt(times % 60);
            min = Mathf.FloorToInt(times / 60 % 60);
            hr = Mathf.FloorToInt(times / 3600);
        }
        private void ToSI(float times, out string sec, out string min, out string hr)
        {
            sec = Mathf.FloorToInt(times % 60).ToString("D2");
            min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
            hr = Mathf.FloorToInt(times / 3600).ToString("D2");
        }
        private void ToM(float times, out float min)
        {
            min = Mathf.FloorToInt(times / 60 % 60);
        }
        private void ToM(float times, out string min)
        {
            min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
        }
        private void ToH(float times, out float hr)
        {
            hr = Mathf.FloorToInt(times / 3600);
        }
        private void ToH(float times, out string hr)
        {
            hr = Mathf.FloorToInt(times / 3600).ToString("D2");
        }
        private void ToMH(float times, out float min, out float hr)
        {
            min = Mathf.FloorToInt(times / 60 % 60);
            hr = Mathf.FloorToInt(times / 3600);
        }
        private void ToMH(float times, out string min, out string hr)
        {
            min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
            hr = Mathf.FloorToInt(times / 3600).ToString("D2");
        }
        private void ToSH(float times, out float sec, out float hr)
        {
            sec = Mathf.FloorToInt(times % 60);
            hr = Mathf.FloorToInt(times / 3600);
        }
        private void ToSH(float times, out string sec, out string hr)
        {
            sec = Mathf.FloorToInt(times % 60).ToString("D2");
            hr = Mathf.FloorToInt(times / 3600).ToString("D2");
        }
        #endregion
    }
#endif
    #endregion
    #region Enum
    private enum Settings
    {
        Normal,
        UI
    }
    private enum Display
    {
        Normal,
        NormalDecimal2,
        SecMin,
        SecMinDecimal2,
        SI,
        SIDecimal2,
        Min,
        MinDecimal2,
        Hr,
        HrDecimal2,
        MinHr,
        MinHrDecimal2,
        SecHr,
        SecHrDecimal2
    }
    private enum Option
    {
        KeyCode,
        DeltaTime
    }
    private enum InputState
    {
        Single,
        AfterSingle,
        Continuous
    }
    private enum Calculation
    {
        Minus,
        Plus
    }
    #endregion
    [SerializeField] private Settings m_Settings;
    [SerializeField] private Display m_Display = Display.Normal;

    [SerializeField] private Option m_Option = Option.KeyCode;
    [SerializeField] private InputState m_InputState = InputState.Single;
    [SerializeField] private KeyCode m_Key = KeyCode.Mouse0;
    [SerializeField] private Calculation m_Calculation = Calculation.Minus;
    [SerializeField] private int m_DefaultCount;
    [SerializeField] private int m_Fluctuation = 1;
    [SerializeField] private float m_Per = 1.0f;
    [SerializeField] private int m_Min, m_Max;

    [SerializeField] private Font m_Font;
    [SerializeField] private int m_FontSize = 60;
    [SerializeField] private Color m_FontColorNormal = Color.black;
    [SerializeField] private Color m_FontColorHover = Color.black;
    [SerializeField] private int m_Position = 8;

    private float m_Timer = 0.0f;

    private string m_Label;
    [SerializeField] private int m_CurrentCount;
    private int m_Counts
    {
        get
        {
            return m_CurrentCount;
        }
        set
        {
            if (value >= m_Min && value <= m_Max)
            {
                m_CurrentCount = value;
            }
            if (value < m_Min)
            {
                m_CurrentCount = m_Min;
            }
            if (value > m_Max)
            {
                m_CurrentCount = m_Max;
            }
        }
    }

    private void OnGUI()
    {
        GUIStyle labelStyle = new GUIStyle(GUI.skin.label);
        labelStyle.normal.textColor = m_FontColorNormal;
        labelStyle.hover.textColor = m_FontColorHover;
        labelStyle.fontSize = m_FontSize;
        labelStyle.font = m_Font;
        Vector2 labelSize = labelStyle.CalcSize(new GUIContent(m_Label));
        GUILayout.BeginVertical();
        switch (m_Position)
        {
            case 2:
                GUILayout.Space(Screen.height - labelSize.y);
                break;
            case 3:
                GUILayout.Space(Screen.height - labelSize.y);
                break;
            case 5:
                GUILayout.Space(Screen.height - labelSize.y);
                break;
            case 6:
                GUILayout.Space(Screen.height / 2 - labelSize.y / 2);
                break;
            case 7:
                GUILayout.Space(Screen.height / 2 - labelSize.y / 2);
                break;
            case 8:
                GUILayout.Space(Screen.height / 2 - labelSize.y / 2);
                break;
            default:
                break;
        }
        GUILayout.BeginHorizontal();
        switch (m_Position)
        {
            case 0:
                GUILayout.Space(10);
                break;
            case 1:
                GUILayout.Space(Screen.width - labelSize.x - 10);
                break;
            case 2:
                GUILayout.Space(10);
                break;
            case 3:
                GUILayout.Space(Screen.width - labelSize.x - 10);
                break;
            case 4:
                GUILayout.Space(Screen.width / 2 - labelSize.x / 2);
                break;
            case 5:
                GUILayout.Space(Screen.width / 2 - labelSize.x / 2);
                break;
            case 6:
                GUILayout.Space(10);
                break;
            case 7:
                GUILayout.Space(Screen.width - labelSize.x - 10);
                break;
            case 8:
                GUILayout.Space(Screen.width / 2 - labelSize.x / 2);
                break;
            default:
                break;
        }
        GUILayout.Label(m_Label, labelStyle);
        GUILayout.EndHorizontal();
        GUILayout.EndVertical();
    }
    private void Awake()
    {
        m_Counts = m_DefaultCount;
        ToDisplay();
    }
    private void Update()
    {
        switch (m_Option)
        {
            case Option.KeyCode:
                OptionKeyCode();
                break;
            case Option.DeltaTime:
                OptionDeltaTime();
                break;
            default:
                break;
        }
    }
    private void OptionKeyCode()
    {
        switch (m_InputState)
        {
            case InputState.Single:
                if (Input.GetKeyDown(m_Key))
                {
                    switch (m_Calculation)
                    {
                        case Calculation.Minus:
                            m_Counts -= m_Fluctuation;
                            ToDisplay();
                            break;
                        case Calculation.Plus:
                            m_Counts += m_Fluctuation;
                            ToDisplay();
                            break;
                        default:
                            break;
                    }
                }
                break;
            case InputState.AfterSingle:
                if (Input.GetKeyUp(m_Key))
                {
                    switch (m_Calculation)
                    {
                        case Calculation.Minus:
                            m_Counts -= m_Fluctuation;
                            ToDisplay();
                            break;
                        case Calculation.Plus:
                            m_Counts += m_Fluctuation;
                            ToDisplay();
                            break;
                        default:
                            break;
                    }
                }
                break;
            case InputState.Continuous:
                m_Timer += Time.deltaTime;
                if (m_Timer >= m_Per)
                {
                    if (Input.GetKey(m_Key))
                    {
                        switch (m_Calculation)
                        {
                            case Calculation.Minus:
                                m_Counts -= m_Fluctuation;
                                ToDisplay();
                                break;
                            case Calculation.Plus:
                                m_Counts += m_Fluctuation;
                                ToDisplay();
                                break;
                            default:
                                break;
                        }
                    }
                    m_Timer = 0.0f;
                }
                break;
            default:
                break;
        }
    }
    private void OptionDeltaTime()
    {
        m_Timer += Time.deltaTime;
        if (m_Timer >= m_Per)
        {
            switch (m_Calculation)
            {
                case Calculation.Minus:
                    m_Counts -= m_Fluctuation;
                    ToDisplay();
                    break;
                case Calculation.Plus:
                    m_Counts += m_Fluctuation;
                    ToDisplay();
                    break;
                default:
                    break;
            }
            m_Timer = 0.0f;
        }
    }
    #region Display
    private void ToDisplay()
    {
        switch (m_Display)
        {
            case Display.Normal:
                ToS(m_Counts, out float s_sec);
                m_Label = $"{s_sec}";
                break;
            case Display.NormalDecimal2:
                ToS(m_Counts, out string s_sec_d2);
                m_Label = s_sec_d2;
                break;
            case Display.SecMin:
                ToSM(m_Counts, out float sm_sec, out float sm_min);
                m_Label = $"{sm_min}:{sm_sec}";
                break;
            case Display.SecMinDecimal2:
                ToSM(m_Counts, out string sm_sec_d2, out string sm_min_d2);
                m_Label = $"{sm_min_d2}:{sm_sec_d2}";
                break;
            case Display.SI:
                ToSI(m_Counts, out float si_sec, out float si_min, out float si_hr);
                m_Label = $"{si_hr}:{si_min}:{si_sec}";
                break;
            case Display.SIDecimal2:
                ToSI(m_Counts, out string si_sec_d2, out string si_min_d2, out string si_hr_d2);
                m_Label = $"{si_hr_d2}:{si_min_d2}:{si_sec_d2}";
                break;
            case Display.Min:
                ToM(m_Counts, out float m_min);
                m_Label = $"{m_min}";
                break;
            case Display.MinDecimal2:
                ToM(m_Counts, out string m_min_d2);
                m_Label = m_min_d2;
                break;
            case Display.Hr:
                ToH(m_Counts, out float h_hr);
                m_Label = $"{h_hr}";
                break;
            case Display.HrDecimal2:
                ToH(m_Counts, out string h_hr_d2);
                m_Label = h_hr_d2;
                break;
            case Display.MinHr:
                ToMH(m_Counts, out float mh_min, out float mh_hr);
                m_Label = $"{mh_hr}:{mh_min}";
                break;
            case Display.MinHrDecimal2:
                ToMH(m_Counts, out string mh_min_d2, out string mh_hr_d2);
                m_Label = $"{mh_hr_d2}:{mh_min_d2}";
                break;
            case Display.SecHr:
                ToSH(m_Counts, out float sh_sec, out float sh_hr);
                m_Label = $"{sh_hr}:{sh_sec}";
                break;
            case Display.SecHrDecimal2:
                ToSH(m_Counts, out string sh_sec_d2, out string sh_hr_d2);
                m_Label = $"{sh_hr_d2}:{sh_sec_d2}";
                break;
            default:
                break;
        }
    }
    private void ToS(float times, out float sec)
    {
        sec = Mathf.FloorToInt(times);
    }
    private void ToS(float times, out string sec)
    {
        sec = Mathf.FloorToInt(times).ToString("D2");
    }
    private void ToSM(float times, out float sec, out float min)
    {
        sec = Mathf.FloorToInt(times % 60);
        min = Mathf.FloorToInt(times / 60);
    }
    private void ToSM(float times, out string sec, out string min)
    {
        sec = Mathf.FloorToInt(times % 60).ToString("D2");
        min = Mathf.FloorToInt(times / 60).ToString("D2");
    }
    private void ToSI(float times, out float sec, out float min, out float hr)
    {
        sec = Mathf.FloorToInt(times % 60);
        min = Mathf.FloorToInt(times / 60 % 60);
        hr = Mathf.FloorToInt(times / 3600);
    }
    private void ToSI(float times, out string sec, out string min, out string hr)
    {
        sec = Mathf.FloorToInt(times % 60).ToString("D2");
        min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
        hr = Mathf.FloorToInt(times / 3600).ToString("D2");
    }
    private void ToM(float times, out float min)
    {
        min = Mathf.FloorToInt(times / 60 % 60);
    }
    private void ToM(float times, out string min)
    {
        min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
    }
    private void ToH(float times, out float hr)
    {
        hr = Mathf.FloorToInt(times / 3600);
    }
    private void ToH(float times, out string hr)
    {
        hr = Mathf.FloorToInt(times / 3600).ToString("D2");
    }
    private void ToMH(float times, out float min, out float hr)
    {
        min = Mathf.FloorToInt(times / 60 % 60);
        hr = Mathf.FloorToInt(times / 3600);
    }
    private void ToMH(float times, out string min, out string hr)
    {
        min = Mathf.FloorToInt(times / 60 % 60).ToString("D2");
        hr = Mathf.FloorToInt(times / 3600).ToString("D2");
    }
    private void ToSH(float times, out float sec, out float hr)
    {
        sec = Mathf.FloorToInt(times % 60);
        hr = Mathf.FloorToInt(times / 3600);
    }
    private void ToSH(float times, out string sec, out string hr)
    {
        sec = Mathf.FloorToInt(times % 60).ToString("D2");
        hr = Mathf.FloorToInt(times / 3600).ToString("D2");
    }
    #endregion
}
