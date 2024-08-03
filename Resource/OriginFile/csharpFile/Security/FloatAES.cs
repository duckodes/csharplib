public class FloatAES
{
    private AESEncryption m_AESEncryption;
    private string m_encryptFloat;
    public FloatAES(float initFloat, byte[] key, out float _float)
    {
        Initialize(initFloat, key, out _float);
    }
    private void Initialize(float initFloat, byte[] key, out float _float)
    {
        m_AESEncryption = new AESEncryption(key, key);
        m_encryptFloat = m_AESEncryption.Encrypt($"{initFloat}");
        _float = initFloat;
    }
    public void Start(out float _float)
    {
        _float = float.Parse(m_AESEncryption.Decrypt(m_encryptFloat));
    }
    public void End(float _float)
    {
        m_encryptFloat = m_AESEncryption.Encrypt($"{_float}");
    }
}