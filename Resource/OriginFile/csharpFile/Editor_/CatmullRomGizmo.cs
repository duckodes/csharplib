#if UNITY_EDITOR
using UnityEngine;

public class CatmullRomGizmo : MonoBehaviour
{
    [Tooltip("是否顯示 Gizmo 曲線")]
    public bool showGizmo = true;

    [Tooltip("至少需要4個點才能畫出完整曲線")]
    public Transform[] controlPoints;
    public int resolution = 20;

    private void OnDrawGizmos()
    {
        if (!showGizmo || controlPoints == null || controlPoints.Length < 4) return;

        Gizmos.color = Color.cyan;

        for (int i = 0; i < controlPoints.Length - 3; i++)
        {
            Vector3 p0 = controlPoints[i].position;
            Vector3 p1 = controlPoints[i + 1].position;
            Vector3 p2 = controlPoints[i + 2].position;
            Vector3 p3 = controlPoints[i + 3].position;

            Vector3 previousPoint = p1;
            for (int j = 1; j <= resolution; j++)
            {
                float t = j / (float)resolution;
                Vector3 point = GetCatmullRomPosition(t, p0, p1, p2, p3);
                Gizmos.DrawLine(previousPoint, point);
                previousPoint = point;
            }
        }
    }

    private Vector3 GetCatmullRomPosition(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)
    {
        // Catmull-Rom公式
        return 0.5f * (
            2f * p1 +
            (-p0 + p2) * t +
            (2f * p0 - 5f * p1 + 4f * p2 - p3) * t * t +
            (-p0 + 3f * p1 - 3f * p2 + p3) * t * t * t
        );
    }
}
#endif