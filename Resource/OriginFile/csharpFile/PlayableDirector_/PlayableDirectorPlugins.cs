using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;

public class PlayableDirectorPlugins : MonoBehaviour
{
    [Serializable]
    public struct BindingOption
    {
        public PlayableDirector playableDirector;
        public string trackName;
        public UnityEngine.Object _object;
    }
    [SerializeField] private List<BindingOption> bindingOptions;
    private void Awake()
    {
        for (int i = 0; i < bindingOptions.Count; i++)
        {
            bindingOptions[i].playableDirector.SetTrackBinding(bindingOptions[i].trackName, bindingOptions[i]._object);
        }
    }
}
