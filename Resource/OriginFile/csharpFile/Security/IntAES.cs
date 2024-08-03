public class IntAES
{
    private AESEncryption m_AESEncryption;
    private string m_encryptInt;
    public IntAES(int initInt, byte[] key, out int _int)
    {
        Initialize(initInt, key, out _int);
    }
    private void Initialize(int initInt, byte[] key, out int _int)
    {
        m_AESEncryption = new AESEncryption(key, key);
        m_encryptInt = m_AESEncryption.Encrypt($"{initInt}");
        _int = initInt;
    }
    public void Start(out int _int)
    {
        _int = int.Parse(m_AESEncryption.Decrypt(m_encryptInt));
    }
    public void End(float _int)
    {
        m_encryptInt = m_AESEncryption.Encrypt($"{_int}");
    }
}