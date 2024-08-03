public class StringAES
{
    private AESEncryption m_AESEncryption;
    private string m_encryptString;
    public StringAES(string initString, byte[] key, out string _string)
    {
        Initialize(initString, key, out _string);
    }
    private void Initialize(string initString, byte[] key, out string _string)
    {
        m_AESEncryption = new AESEncryption(key, key);
        m_encryptString = m_AESEncryption.Encrypt(initString);
        _string = initString;
    }
    public void Start(out string _string)
    {
        _string = m_AESEncryption.Decrypt(m_encryptString);
    }
    public void End(string _string)
    {
        m_encryptString = m_AESEncryption.Encrypt(_string);
    }
}