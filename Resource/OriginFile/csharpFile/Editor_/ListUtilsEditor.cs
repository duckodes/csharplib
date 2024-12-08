#if UNITY_EDITOR
using UnityEditor;

/// <summary>
/// §ó§ïListªºname
/// </summary>
[CustomEditor(typeof(ListUtils))]
public class ListUtilsEditor : Editor
{
    private SerializedProperty m_listUtils;

    private void OnEnable()
    {
        m_listUtils = serializedObject.FindProperty("m_listUtils");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        EditorGUILayout.PropertyField(m_listUtils);
        if (m_listUtils != null)
        {
            for (int i = 0; i < m_listUtils.arraySize; i++)
            {
                SerializedProperty levelItem = m_listUtils.GetArrayElementAtIndex(i);
                SerializedProperty nameProperty = levelItem.FindPropertyRelative("m_name");
                nameProperty.stringValue = $"custom name {i}";
            }
        }

        serializedObject.ApplyModifiedProperties();
    }
}
#endif