using System.Collections.Generic;

namespace UnityEngine.Playables
{
    public static class PlayableDirectorExtension
    {
        /// <summary>
        /// 設置軌道綁定物件<br/><br/>
        /// 
        /// trackName: 軌道名稱<br/>
        /// newObject: 新目標物件 (目標與軌道類型需相同)
        /// </summary>
        public static void SetTrackBinding(this PlayableDirector playableDirector, string trackName, Object newObject)
        {
            List<string> trackNames = new List<string>();
            foreach (PlayableBinding info in playableDirector.playableAsset.outputs)
            {
                trackNames.Add(info.streamName);
                if (info.streamName == trackName && info.outputTargetType == newObject.GetType())
                {
                    playableDirector.SetGenericBinding(info.sourceObject, newObject);
                }
                if (info.streamName == trackName && info.outputTargetType != newObject.GetType())
                {
                    Debug.LogWarning($"輸入類型不相符: {newObject.GetType()}");
                }
            }
            if (!trackNames.Contains(trackName))
            {
                Debug.LogError($"軌道內沒有: {trackName}");
            }
        }
    }
}
