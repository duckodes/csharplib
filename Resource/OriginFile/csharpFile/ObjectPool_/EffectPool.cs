using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectPool : MonoBehaviour
{
    [SerializeField] private GameObject effectPrefab;
    [SerializeField] private int poolSize = 10;
    [SerializeField] private int activeTime = 1;

    private List<GameObject> effectPool;

    private void Start()
    {
        effectPool = new List<GameObject>();
        for (int i = 0; i < poolSize; i++)
        {
            GameObject effect = Instantiate(effectPrefab);
            effect.SetActive(false);
            effectPool.Add(effect);
        }
    }

    public void DisplayEffect(Vector3 position, Quaternion rotation)
    {
        GameObject effect = GetAvailableEffect();
        if (effect != null)
        {
            effect.transform.position = position;
            effect.transform.rotation = rotation;
            effect.SetActive(true);

            StartCoroutine(RecycleEffectAfterDuration(effect));
        }
    }

    private GameObject GetAvailableEffect()
    {
        foreach (GameObject effect in effectPool)
        {
            if (!effect.activeInHierarchy)
            {
                return effect;
            }
        }

        return null;
    }

    private IEnumerator RecycleEffectAfterDuration(GameObject effect)
    {
        float duration = effect.GetComponent<ParticleSystem>().main.duration;

        yield return new WaitForSeconds(duration + activeTime);

        effect.SetActive(false);
    }
}
